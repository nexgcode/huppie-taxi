interface DistanceInfo {
  distance: string | undefined;
  duration: string | undefined;
}

const BASE_RATE_EUR = 10;
const PRICE_PER_KILOMETER_EUR = 1;

interface DistanceMatrixResponse {
  destination_addresses: string[];
  origin_addresses: string[];
  rows: {
    elements: {
      status: string;
      distance?: {
        text: string;
        value: number;
      };
      duration?: {
        text: string;
        value: number;
      };
    }[];
  }[];
  status: string;
}

export function useDistanceCalculation() {
  const distanceInfo = ref<DistanceInfo | null>(null);

  const parseKilometers = (distanceText: string | undefined): number => {
    if (!distanceText) {
      return 0;
    }
    const normalized = distanceText.replace(',', '.');

    if (normalized.toLowerCase().includes('km')) {
      const match = normalized.match(/(\d*\.?\d+)/);
      if (!match) {
        return 0;
      }
      const kilometers = Number(match[1]);
      return Number.isFinite(kilometers) ? kilometers : 0;
    }

    if (normalized.toLowerCase().includes('m')) {
      const match = normalized.match(/(\d+)/);
      if (!match) {
        return 0;
      }
      const meters = Number(match[1]);
      return Number.isFinite(meters) ? meters / 1000 : 0;
    }

    return 0;
  };

  const parseMinutes = (durationText: string | undefined): number => {
    if (!durationText) {
      return 0;
    }
    const lower = durationText.toLowerCase();
    let totalMinutes = 0;

    const hoursMatch = lower.match(/(\d+)\s*hour/);
    if (hoursMatch) {
      const hours = Number(hoursMatch[1]);
      if (Number.isFinite(hours)) {
        totalMinutes += hours * 60;
      }
    }

    const minutesMatch = lower.match(/(\d+)\s*min/);
    if (minutesMatch) {
      const minutes = Number(minutesMatch[1]);
      if (Number.isFinite(minutes)) {
        totalMinutes += minutes;
      }
    }

    return totalMinutes;
  };

  const estimatedPrice = computed(() => {
    if (!distanceInfo.value) {
      return '';
    }

    const kilometers = parseKilometers(distanceInfo.value.distance);
    const minutes = parseMinutes(distanceInfo.value.duration);

    if (kilometers <= 0 && minutes <= 0) {
      return '';
    }

    const price = kilometers * PRICE_PER_KILOMETER_EUR + BASE_RATE_EUR;
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price);
  });

  const calculateDistance = async (origin: string, destination: string) => {
    if (!origin || !destination) {
      return;
    }

    try {
      const data = await $fetch<DistanceMatrixResponse>(
        '/api/distance-matrix',
        {
          method: 'POST',
          body: {
            origins: origin,
            destinations: destination,
            mode: 'driving',
          },
        });

      if (data.rows[0]?.elements[0]?.status === 'OK') {
        distanceInfo.value = {
          distance: data.rows[0]?.elements[0]?.distance?.text,
          duration: data.rows[0]?.elements[0]?.duration?.text,
        };
      }
    } catch (error) {
      console.error('Error calculating distance:', error);
    }
  };

  const resetDistance = () => {
    distanceInfo.value = null;
  };

  return {
    distanceInfo,
    estimatedPrice,
    calculateDistance,
    resetDistance,
  };
}
