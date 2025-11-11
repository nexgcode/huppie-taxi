interface PlaceText {
  text?: string;
}

interface PlacePrediction {
  placePrediction?: {
    text?: PlaceText;
  };
}

interface AutocompleteResponse {
  suggestions?: PlacePrediction[];
}

export function usePlaceAutocomplete() {
  const suggestions = ref<string[]>([]);
  const isLoading = ref(false);
  const popoverOpen = ref(false);
  const suppressSearch = ref(false);
  const requestId = ref(0);

  const fetchSuggestions = async (input: string) => {
    if (input.length < 3) {
      suggestions.value = [];
      isLoading.value = false;
      return;
    }

    try {
      isLoading.value = true;
      const currentRequestId = ++requestId.value;

      const response = await $fetch<AutocompleteResponse>('/api/places-autocomplete', {
        method: 'POST',
        body: {
          input,
        },
      });

      if (currentRequestId !== requestId.value) {
        return;
      }

      suggestions.value = (response.suggestions ?? [])
        .map(suggestion => suggestion.placePrediction?.text?.text)
        .filter((text): text is string => Boolean(text));
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      isLoading.value = false;
    }
  };

  const selectSuggestion = () => {
    suppressSearch.value = true;
    suggestions.value = [];
    popoverOpen.value = false;
  };

  const handleInput = () => {
    if (!suppressSearch.value) {
      return;
    }
    suppressSearch.value = false;
  };

  const clearSuggestions = () => {
    popoverOpen.value = false;
    suggestions.value = [];
    isLoading.value = false;
  };

  return {
    suggestions,
    isLoading,
    popoverOpen,
    suppressSearch,
    fetchSuggestions,
    selectSuggestion,
    handleInput,
    clearSuggestions,
  };
}
