<template>
  <div class="flex items-center justify-between mb-6">
    <StepBadge
      :step-number="1"
      :label="$t('form.wizardRoute')"
      :is-active="currentStep === 1"
    />

    <div class="flex-1 h-1 mx-4 bg-gray-200 rounded">
      <div
        class="h-full bg-green-600 rounded transition-all duration-300"
        :style="{ width: progressWidth }"
      />
    </div>

    <StepBadge
      :step-number="2"
      :label="$t('form.wizardContact')"
      :is-active="currentStep === 2"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentStep: number;
  totalSteps?: number;
}

const props = withDefaults(defineProps<Props>(), {
  totalSteps: 2,
});

const progressWidth = computed(() => {
  const progress = ((props.currentStep - 1) / (props.totalSteps - 1)) * 100;
  return `${progress}%`;
});
</script>
