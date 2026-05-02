import { toast } from 'vue-sonner';
import type {
  RouteData,
  ContactData,
  DistanceInfo,
} from '~/types/booking';
import {
  BOOKING_STEPS,
  INITIAL_ROUTE_DATA,
  INITIAL_CONTACT_DATA,
} from '~/types/booking';

/**
 * Formats booking data into a Telegram message
 */
function formatBookingMessage(
  route: RouteData,
  contact: ContactData,
  price: string | null,
  distance: DistanceInfo | null,
): string {
  const lines: string[] = [];

  lines.push(`Van: ${route.from}`);
  lines.push(`Naar: ${route.to}`);

  lines.push('');
  if (contact.date) lines.push(`Datum: ${contact.date}`);
  if (contact.time) lines.push(`Tijd: ${contact.time}`);
  lines.push(`Prijs: ${price}`);

  lines.push('');
  if (distance) {
    lines.push(`Rijduur: ${distance.duration}`);
    lines.push(`Afstand: ${distance.distance}`);
  }

  lines.push('');
  lines.push(`Passagiers: ${route.passengers}`);
  lines.push(`Telefoon: ${contact.phone}`);
  lines.push(`Email: ${contact.email}`);

  return lines.join('\n');
}

export const useBookingStore = defineStore('booking', () => {
  const { t } = useI18n();

  // State
  const currentStep = ref<number>(BOOKING_STEPS.ROUTE);
  const isSubmitting = ref(false);
  const routeData = ref<RouteData>({ ...INITIAL_ROUTE_DATA });
  const contactData = ref<ContactData>({ ...INITIAL_CONTACT_DATA });
  const distanceInfo = ref<DistanceInfo | null>(null);
  const estimatedPrice = ref<string | null>(null);
  const isFromSelected = ref(false);
  const isToSelected = ref(false);
  const isFromLocked = ref(false);
  const isToLocked = ref(false);

  // Computed
  const isRouteStepValid = computed(() => {
    const { from, to, passengers } = routeData.value;
    return from.trim() !== ''
      && to.trim() !== ''
      && passengers >= 1
      && isFromSelected.value
      && isToSelected.value;
  });

  const isContactStepValid = computed(() => {
    const cleanPhone = contactData.value.phone.replace(/[\s\-()]/g, '');

    if (cleanPhone.length === 0) {
      return false;
    }

    // International phone number validation (E.164 format)
    const internationalRegex = /^\+[1-9]\d{6,14}$/;
    // Dutch local format (starting with 0)
    const dutchLocalRegex = /^0[1-9]\d{8}$/;

    const isPhoneValid = internationalRegex.test(cleanPhone) || dutchLocalRegex.test(cleanPhone);

    return isPhoneValid && contactData.value.acceptedTerms;
  });

  const isFormValid = computed(() => {
    return isRouteStepValid.value && isContactStepValid.value;
  });

  // Actions
  const goToNextStep = () => {
    if (!isRouteStepValid.value) {
      return;
    }
    currentStep.value = BOOKING_STEPS.CONTACT;
  };

  const goToPreviousStep = () => {
    currentStep.value = BOOKING_STEPS.ROUTE;
  };

  const resetForm = () => {
    routeData.value = { ...INITIAL_ROUTE_DATA };
    contactData.value = { ...INITIAL_CONTACT_DATA };
    currentStep.value = BOOKING_STEPS.ROUTE;
    distanceInfo.value = null;
    estimatedPrice.value = null;
    isSubmitting.value = false;
    isFromSelected.value = false;
    isToSelected.value = false;
    isFromLocked.value = false;
    isToLocked.value = false;
  };

  const submitBooking = async () => {
    if (!isFormValid.value) {
      return;
    }

    isSubmitting.value = true;

    try {
      const message = formatBookingMessage(
        routeData.value,
        contactData.value,
        estimatedPrice.value,
        distanceInfo.value,
      );

      await $fetch('/api/send-telegram', {
        method: 'POST',
        body: {
          message,
          title: 'Nieuwe Boeking',
        },
      });

      resetForm();

      toast.success(t('toast.message'));
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error(t('toast.error'));
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    // State
    currentStep,
    isSubmitting,
    routeData,
    contactData,
    distanceInfo,
    estimatedPrice,
    isFromSelected,
    isToSelected,
    isFromLocked,
    isToLocked,
    // Computed
    isRouteStepValid,
    isContactStepValid,
    isFormValid,
    // Actions
    goToNextStep,
    goToPreviousStep,
    resetForm,
    submitBooking,
  };
});
