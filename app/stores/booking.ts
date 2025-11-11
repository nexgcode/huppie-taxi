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
  const sections = [
    `Nieuwe boeking:`,
    `\nVan:\n${route.from}`,
    `Naar:\n${route.to}`,
    `\nTelefoon:\n${contact.phone}`,
    `Email:\n${contact.email}`,
  ];

  if (contact.date) {
    sections.push(`\nDatum:\n${contact.date}`);
  }

  if (contact.time) {
    sections.push(`Tijd:\n${contact.time}`);
  }

  sections.push(`\nAantal passagiers:\n${route.passengers}`);
  sections.push(`Estimatie prijs:\n${price}`);

  if (distance) {
    sections.push(`Afstand:\n${distance.distance}`);
    sections.push(`Rijduur:\n${distance.duration}`);
  }

  return sections.join('\n');
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
    return contactData.value.phone.trim() !== '';
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
