<template>
  <div class="space-y-4">
    <BookingSummary
      :route-data="bookingStore.routeData"
      :distance-info="bookingStore.distanceInfo"
      :estimated-price="bookingStore.estimatedPrice"
    />

    <div class="space-y-4">
      <div>
        <Label for="phone" class="text-sm font-semibold text-gray-700 mb-1">
          {{ $t('form.phone') }} <span class="text-red-500">*</span>
        </Label>
        <Input
          v-model="contactData.phone"
          autocomplete="off"
          name="phone"
          type="tel"
          required
          class="w-full"
          :placeholder="$t('form.phonePlaceholder')"
        />
      </div>

      <div>
        <Label for="email" class="text-sm font-semibold text-gray-700 mb-1">
          {{ $t('form.email') }}
        </Label>
        <Input
          v-model="contactData.email"
          autocomplete="off"
          name="email"
          type="email"
          class="w-full"
          :placeholder="$t('form.typeHere')"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label for="date" class="text-sm font-semibold text-gray-700 mb-1">
            {{ $t('form.date') }}
          </Label>
          <DatePicker
            v-model="selectedDate"
            class="w-full"
          />
        </div>
        <div>
          <Label for="time" class="text-sm font-semibold text-gray-700 mb-1">
            {{ $t('form.time') }}
          </Label>
          <TimePicker
            v-model="contactData.time"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DateValue } from '@internationalized/date';
import { parseDate } from '@internationalized/date';
import type { ContactData } from '~/types/booking';
import TimePicker from '~/components/ui/time-picker/TimePicker.vue';

const bookingStore = useBookingStore();

const contactData = defineModel<ContactData>({
  required: true,
});

const selectedDate = ref<DateValue>();

watch(selectedDate, (newDate) => {
  if (newDate) {
    contactData.value.date = `${newDate.year}-${String(newDate.month).padStart(2, '0')}-${String(newDate.day).padStart(2, '0')}`;
  } else {
    contactData.value.date = undefined;
  }
});

watch(() => contactData.value.date, (newDateString) => {
  if (newDateString && !selectedDate.value) {
    try {
      selectedDate.value = parseDate(newDateString) as DateValue;
    } catch {
      selectedDate.value = undefined;
    }
  }
}, { immediate: true });
</script>
