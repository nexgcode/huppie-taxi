<template>
  <div class="flex justify-between items-center gap-2 min-w-0">
    <span class="text-gray-600 shrink-0">{{ props.label }}</span>
    <span
      :class="[
        'font-medium text-right truncate min-w-0',
        props.highlight ? 'text-green-600 font-bold' : 'text-gray-900',
      ]"
    >
      {{ props.value }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  value: string | undefined;
  highlight?: boolean;
}

const props = defineProps<Props>();
</script>
