<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-white py-16 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              {{ $t('hero.title') }}
            </h1>
            <p class="text-xl text-gray-600">
              {{ $t('hero.description') }}
            </p>
            <a href="https://wa.me/31681914785" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors">
              <span class="mr-3">{{ $t('hero.cta') }}</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
          <div class="relative h-[400px] rounded-xl overflow-hidden">
            <img src="/images/eco-taxi.jpg" alt="GroenTaxi eco-friendly vehicle" class="object-cover w-full h-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="bg-gray-50 py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('services.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4">{{ $t('services.airportTransfers') }}</h3>
            <p class="text-gray-600">{{ $t('services.airportTransfersDescription') }}</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4">{{ $t('services.cityRides') }}</h3>
            <p class="text-gray-600">{{ $t('services.cityRidesDescription') }}</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4">{{ $t('services.longDistance') }}</h3>
            <p class="text-gray-600">{{ $t('services.longDistanceDescription') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us Section -->
    <section id="why-us" class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('whyUs.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <span class="text-2xl text-green-600">🌱</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('whyUs.ecoFriendly') }}</h3>
            <p class="text-gray-600">{{ $t('whyUs.ecoFriendlyDescription') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">💰</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('whyUs.affordable') }}</h3>
            <p class="text-gray-600">{{ $t('whyUs.affordableDescription') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">🚗</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('whyUs.comfortable') }}</h3>
            <p class="text-gray-600">{{ $t('whyUs.comfortableDescription') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">👨‍✈️</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('whyUs.professional') }}</h3>
            <p class="text-gray-600">{{ $t('whyUs.professionalDescription') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="bg-gray-50 py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('pricing.title') }}</h2>
        <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div class="space-y-6">
            <div class="flex justify-between items-center pb-4 border-b">
              <span class="font-semibold">{{ $t('pricing.baseRate') }}</span>
              <span>{{ localizedPrice(4.15) }}</span>
            </div>

            <div class="flex justify-between items-center pb-4 border-b">
              <span class="font-semibold">{{ $t('pricing.perKm') }}</span>
              <span>{{ localizedPrice(3.05) }}</span>
            </div>

            <div class="flex justify-between items-center pb-4 border-b">
              <span class="font-semibold">{{ $t('pricing.minutePrice') }}</span>
              <span>{{ localizedPrice(0.50) }}</span>
            </div>

            <div class="flex justify-between items-center">
              <span class="font-semibold">{{ $t('pricing.waitingTime') }}</span>
              <span>{{ localizedPrice(0.95) }}</span>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('contact.title') }}</h2>
        <div class="flex justify-center items-center">
          <a href="https://wa.me/31681914785" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors">
            <span class="mr-3">{{ $t('contact.whatsapp') }}</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home',
});

const localizedPrice = (price: number) => {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price)
}
</script>
