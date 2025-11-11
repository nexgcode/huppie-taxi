<template>
  <div class="bg-white p-6 rounded-lg shadow-lg mx-auto">
    <StepIndicator :current-step="bookingStore.currentStep" />

    <form class="space-y-4" @submit.prevent="handleFormSubmit">
      <div v-if="isRouteStep">
        <RouteStep v-model="bookingStore.routeData" />
        <Button
          type="button"
          :disabled="!bookingStore.isRouteStepValid"
          class="w-full bg-green-600 hover:bg-green-700 text-white mt-6"
          size="default"
          @click="bookingStore.goToNextStep"
        >
          {{ $t('form.wizardNextStep') }}
        </Button>
      </div>

      <div v-if="isContactStep">
        <ContactStep v-model="bookingStore.contactData" />
        <div class="flex gap-3 mt-6">
          <Button
            type="button"
            variant="outline"
            class="flex-1"
            size="default"
            @click="bookingStore.goToPreviousStep"
          >
            {{ $t('form.wizardBack') }}
          </Button>
          <Button
            type="submit"
            :disabled="!bookingStore.isFormValid || bookingStore.isSubmitting"
            class="flex-1 bg-green-600 hover:bg-green-700 text-white"
            size="default"
          >
            {{ $t(submitButtonText) }}
          </Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { BOOKING_STEPS } from '~/types/booking';

const bookingStore = useBookingStore();

const isRouteStep = computed(() => bookingStore.currentStep === BOOKING_STEPS.ROUTE);
const isContactStep = computed(() => bookingStore.currentStep === BOOKING_STEPS.CONTACT);

const submitButtonText = computed(() => {
  return bookingStore.isSubmitting ? 'form.submitting' : 'form.submit';
});

const handleFormSubmit = async () => {
  await bookingStore.submitBooking();
};
</script>
