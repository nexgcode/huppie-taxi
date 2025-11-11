<template>
  <div class="flex items-center">
    <div
      :class="[
        'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
        isActive ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600',
      ]"
    >
      {{ stepNumber }}
    </div>
    <span
      :class="[
        'ml-2 text-sm font-medium',
        isActive ? 'text-green-600' : 'text-gray-500',
      ]"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface StepBadgeProps {
  stepNumber: number;
  label: string;
  isActive: boolean;
}

defineProps<StepBadgeProps>();
</script>
