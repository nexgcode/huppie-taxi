<template>
  <section id="why-us" class="py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">
        {{ $t('whyUs.title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <Zap class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-lg font-semibold mb-2">
            {{ $t('whyUs.ecoFriendly') }}
          </h3>
          <p class="text-gray-600">
            {{ $t('whyUs.ecoFriendlyDescription') }}
          </p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <Euro class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-lg font-semibold mb-2">
            {{ $t('whyUs.affordable') }}
          </h3>
          <p class="text-gray-600">
            {{ $t('whyUs.affordableDescription') }}
          </p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <Car class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-lg font-semibold mb-2">
            {{ $t('whyUs.comfortable') }}
          </h3>
          <p class="text-gray-600">
            {{ $t('whyUs.comfortableDescription') }}
          </p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <UserCheck class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-lg font-semibold mb-2">
            {{ $t('whyUs.professional') }}
          </h3>
          <p class="text-gray-600">
            {{ $t('whyUs.professionalDescription') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, Euro, Car, UserCheck } from 'lucide-vue-next';
</script>
