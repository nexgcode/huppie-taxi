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
          :class="{ 'border-red-500': phoneError }"
          :placeholder="$t('form.phonePlaceholder')"
          @blur="validatePhone"
        />
        <p v-if="phoneError" class="text-red-500 text-sm mt-1">
          {{ $t('form.phoneError') }}
        </p>
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

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div class="flex items-center gap-2 mb-2">
          <span class="font-semibold text-gray-900">{{ $t('form.paymentMethodsTitle') }}</span>
        </div>
        <div class="flex items-center gap-4 text-sm text-gray-700">
          <div class="flex items-center gap-2">
            <CreditCard class="w-4 h-4 text-gray-600" />
            <span>{{ $t('form.card') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Banknote class="w-4 h-4 text-gray-600" />
            <span>{{ $t('form.cash') }}</span>
          </div>
        </div>
      </div>

      <div class="flex items-start space-x-3">
        <Checkbox
          id="terms"
          v-model="contactData.acceptedTerms"
          class="mt-1"
        />
        <Label for="terms" class="text-sm text-gray-700 leading-relaxed cursor-pointer">
          {{ $t('form.termsPrefix') }}
          <NuxtLink to="/terms-conditions" target="_blank" class="text-green-600 hover:text-green-700 font-semibold underline">
            {{ $t('form.termsLink') }}
          </NuxtLink>
          <span class="text-red-500">*</span>
        </Label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DateValue } from '@internationalized/date';
import { parseDate } from '@internationalized/date';
import { CreditCard, Banknote } from 'lucide-vue-next';
import type { ContactData } from '~/types/booking';
import TimePicker from '~/components/ui/time-picker/TimePicker.vue';

const bookingStore = useBookingStore();

const contactData = defineModel<ContactData>({
  required: true,
});

const selectedDate = ref<DateValue>();
const phoneError = ref(false);

const validatePhone = () => {
  const cleanPhone = contactData.value.phone.replace(/[\s\-()]/g, '');

  if (cleanPhone.length === 0) {
    phoneError.value = false;
    return;
  }

  // International phone number validation (E.164 format)
  // Accepts: +[country code][number] with 7-15 digits total
  const internationalRegex = /^\+[1-9]\d{6,14}$/;

  // Dutch local format (starting with 0)
  const dutchLocalRegex = /^0[1-9]\d{8}$/;

  phoneError.value = !internationalRegex.test(cleanPhone) && !dutchLocalRegex.test(cleanPhone);
};

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
