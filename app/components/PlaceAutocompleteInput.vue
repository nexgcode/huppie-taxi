<template>
  <div>
    <Label
      :for="props.inputId"
      class="text-sm font-semibold text-gray-700 mb-1 inline-flex items-center gap-2"
    >
      {{ props.label }} <span class="text-red-500">*</span>
      <Spinner v-if="autocomplete.isLoading.value" class="w-3 h-3 text-gray-500" />
    </Label>
    <div ref="inputContainerRef" class="relative">
      <Input
        :id="props.inputId"
        ref="inputRef"
        v-model="inputValue"
        autocomplete="off"
        :name="props.inputId"
        type="text"
        required
        :readonly="isLocked"
        class="w-full pr-10"
        :placeholder="props.placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @click="handleClick"
      />
      <Button
        v-if="isLocked"
        type="button"
        variant="ghost"
        size="icon"
        class="absolute right-0 top-0 h-full px-3 hover:bg-gray-100 rounded-r-md transition-colors cursor-pointer"
        @click="handleClear"
      >
        <X class="h-4 w-4 text-gray-600 hover:text-gray-900 transition-colors" />
      </Button>

      <div
        v-if="showSuggestions"
        class="absolute left-0 top-full w-full z-10 bg-white border rounded shadow mt-1 p-0"
      >
        <div v-if="autocomplete.suggestions.value.length > 0" class="max-h-60 overflow-auto">
          <div
            v-for="(suggestion, index) in autocomplete.suggestions.value"
            :key="index"
            role="option"
            class="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm last:border-b-0 border-b border-gray-100"
            @mousedown.prevent="handleSuggestionClick(suggestion)"
            @touchstart.prevent="handleSuggestionClick(suggestion)"
          >
            {{ suggestion }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { X } from 'lucide-vue-next';

interface Props {
  inputId: string;
  label: string;
  placeholder: string;
}

interface Emits {
  (event: 'suggestionSelected', value: string): void;
  (event: 'update:isValidSelection', value: boolean): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const inputRef = ref<HTMLInputElement>();
const inputContainerRef = ref<HTMLElement>();
const isFocused = ref(false);
const autocomplete = usePlaceAutocomplete();

const inputValue = defineModel<string>({ required: true });
const isLocked = defineModel<boolean>('isLocked', { required: true });

const showSuggestions = ref(false);

const debouncedSearch = useDebounceFn((value: string) => {
  if (autocomplete.suppressSearch.value) {
    autocomplete.suppressSearch.value = false;
    return;
  }
  autocomplete.fetchSuggestions(value);
}, 300);

watch(() => inputValue.value, (value: string, oldValue: string | undefined) => {
  if (autocomplete.suppressSearch.value) {
    autocomplete.suppressSearch.value = false;
    return;
  }
  const previousLength = oldValue?.length ?? 0;
  if (value.length < previousLength) {
    autocomplete.clearSuggestions();
    return;
  }
  debouncedSearch(value);
});

watch(
  [() => autocomplete.suggestions.value.length, () => inputValue.value, isFocused],
  ([length, input, focused]) => {
    const shouldShow
      = !autocomplete.suppressSearch.value
        && length > 0
        && input.trim().length >= 3
        && focused;
    showSuggestions.value = shouldShow;
  },
);

const handleInput = () => {
  autocomplete.handleInput();
  emit('update:isValidSelection', false);
};

const handleFocus = () => {
  isFocused.value = true;
};

const handleClick = () => {
  if (isLocked.value) {
    return;
  }
  if (
    inputValue.value.trim().length >= 3
    && autocomplete.suggestions.value.length > 0
  ) {
    showSuggestions.value = true;
  }
};

const handleBlur = () => {
  isFocused.value = false;
  showSuggestions.value = false;
};

const handleSuggestionClick = (suggestion: string) => {
  inputValue.value = suggestion;
  autocomplete.selectSuggestion();
  isLocked.value = true;
  emit('update:isValidSelection', true);
  emit('suggestionSelected', suggestion);
  showSuggestions.value = false;
};

const handleClear = () => {
  inputValue.value = '';
  isLocked.value = false;
  autocomplete.clearSuggestions();
  emit('update:isValidSelection', false);
  emit('suggestionSelected', '');
  nextTick(() => {
    inputRef.value?.focus();
  });
};

defineExpose({
  inputRef,
});
</script>
