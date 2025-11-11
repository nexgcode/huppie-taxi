<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'w-full justify-start text-left font-normal',
          !modelValue && 'text-muted-foreground',
          props.class,
        )"
      >
        <Clock class="mr-2 h-4 w-4" />
        {{ modelValue || 'Pick a time' }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-4" align="start">
      <div class="flex items-center gap-2">
        <div class="flex flex-col gap-2">
          <Label for="hours" class="text-xs">Hours</Label>
          <Select v-model="selectedHour" @update:model-value="updateTime">
            <SelectTrigger id="hours" class="w-20">
              <SelectValue placeholder="HH" />
            </SelectTrigger>
            <SelectContent class="max-h-[200px]">
              <SelectGroup>
                <SelectItem
                  v-for="hour in hours"
                  :key="hour"
                  :value="hour"
                >
                  {{ hour }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <span class="text-2xl font-bold mt-6">:</span>
        <div class="flex flex-col gap-2">
          <Label for="minutes" class="text-xs">Minutes</Label>
          <Select v-model="selectedMinute" @update:model-value="updateTime">
            <SelectTrigger id="minutes" class="w-20">
              <SelectValue placeholder="MM" />
            </SelectTrigger>
            <SelectContent class="max-h-[200px]">
              <SelectGroup>
                <SelectItem
                  v-for="minute in minutes"
                  :key="minute"
                  :value="minute"
                >
                  {{ minute }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { Clock } from 'lucide-vue-next';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();

const modelValue = defineModel<string | undefined>();

const isOpen = ref(false);
const selectedHour = ref<string | undefined>(undefined);
const selectedMinute = ref<string | undefined>(undefined);

const hours = computed(() => {
  return Array.from({ length: 24 }, (_, index) => {
    return index.toString().padStart(2, '0');
  });
});

const minutes = computed(() => {
  return Array.from({ length: 12 }, (_, index) => {
    const minute = index * 5;
    return minute.toString().padStart(2, '0');
  });
});

const updateTime = () => {
  if (selectedHour.value && selectedMinute.value) {
    modelValue.value = `${selectedHour.value}:${selectedMinute.value}`;
    isOpen.value = false;
  }
};

watch(() => modelValue.value, (newValue) => {
  if (newValue) {
    const [hour, minute] = newValue.split(':');
    selectedHour.value = hour;
    selectedMinute.value = minute;
  }
}, { immediate: true });
</script>
