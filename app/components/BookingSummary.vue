<template>
  <div class="bg-gray-50 border border-gray-200 rounded-lg p-3">
    <h3 class="text-sm font-semibold text-gray-700 mb-2">
      {{ $t('form.summary') }}
    </h3>
    <div class="grid grid-cols-1 gap-1 text-xs">
      <SummaryRow :label="$t('form.summaryFrom')" :value="props.routeData.from" />
      <SummaryRow :label="$t('form.summaryTo')" :value="props.routeData.to" />
      <SummaryRow :label="$t('form.passengers')" :value="String(props.routeData.passengers)" />

      <template v-if="props.distanceInfo">
        <div class="pt-2 border-t border-gray-200 space-y-1">
          <SummaryRow :label="$t('form.summaryDistance')" :value="props.distanceInfo.distance" />
          <SummaryRow :label="$t('form.summaryDuration')" :value="props.distanceInfo.duration" />
          <SummaryRow
            v-if="props.estimatedPrice"
            :label="$t('form.summaryEstimatedPrice')"
            :value="props.estimatedPrice"
            highlight
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteData, DistanceInfo } from '~/types/booking';

interface Props {
  routeData: RouteData;
  distanceInfo: DistanceInfo | null;
  estimatedPrice: string | null;
}

const props = defineProps<Props>();
</script>
