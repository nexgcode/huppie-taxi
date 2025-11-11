<template>
  <section id="services" class="bg-gray-50 py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">
        {{ $t('services.title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-xl font-semibold mb-4">
            {{ $t('services.airportTransfers') }}
          </h3>
          <p class="text-gray-600">
            {{ $t('services.airportTransfersDescription') }}
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-xl font-semibold mb-4">
            {{ $t('services.cityRides') }}
          </h3>
          <p class="text-gray-600">
            {{ $t('services.cityRidesDescription') }}
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-xl font-semibold mb-4">
            {{ $t('services.longDistance') }}
          </h3>
          <p class="text-gray-600">
            {{ $t('services.longDistanceDescription') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
