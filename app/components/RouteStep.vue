<template>
  <div class="space-y-4">
    <PlaceAutocompleteInput
      v-model="routeData.from"
      v-model:is-valid-selection="isFromValidSelection"
      v-model:is-locked="bookingStore.isFromLocked"
      input-id="from"
      :label="$t('form.from')"
      :placeholder="$t('form.fromPlaceholder')"
      @suggestion-selected="handleFromSelected"
    />

    <PlaceAutocompleteInput
      v-model="routeData.to"
      v-model:is-valid-selection="isToValidSelection"
      v-model:is-locked="bookingStore.isToLocked"
      input-id="to"
      :label="$t('form.to')"
      :placeholder="$t('form.toPlaceholder')"
      @suggestion-selected="handleToSelected"
    />
    <div>
      <Label for="passengers" class="text-sm font-semibold text-gray-700 mb-1">
        {{ $t('form.passengers') }} <span class="text-red-500">*</span>
      </Label>
      <Select v-model="routeData.passengers">
        <SelectTrigger class="w-full">
          <SelectValue placeholder="1" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="passengerCount in MAX_PASSENGERS"
              :key="passengerCount"
              :value="passengerCount"
            >
              {{ passengerCount }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteData } from '~/types/booking';

const MAX_PASSENGERS = 4;

const routeData = defineModel<RouteData>({
  required: true,
});

const bookingStore = useBookingStore();
const { calculateDistance, distanceInfo, estimatedPrice } = useDistanceCalculation();

const isFromValidSelection = ref(false);
const isToValidSelection = ref(false);

watch([distanceInfo, estimatedPrice], ([newDistanceInfo, newEstimatedPrice]) => {
  bookingStore.distanceInfo = newDistanceInfo;
  bookingStore.estimatedPrice = newEstimatedPrice;
});

watch([isFromValidSelection, isToValidSelection], ([fromValid, toValid]) => {
  bookingStore.isFromSelected = fromValid;
  bookingStore.isToSelected = toValid;
});

const handleFromSelected = () => {
  if (isToValidSelection.value) {
    calculateDistance(routeData.value.from, routeData.value.to);
  }
};

const handleToSelected = () => {
  if (isFromValidSelection.value) {
    calculateDistance(routeData.value.from, routeData.value.to);
  }
};
</script>
