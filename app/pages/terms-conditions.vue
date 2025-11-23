<template>
  <div class="min-h-screen bg-gray-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">
          {{ $t('termsConditions.title') }}
        </h1>

        <div class="prose prose-lg max-w-none">
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ $t('termsConditions.bookingTitle') }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ $t('termsConditions.bookingContent') }}
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ $t('termsConditions.cancellationTitle') }}
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{ $t('termsConditions.cancellationContent') }}
            </p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
              <p class="text-gray-800 font-medium">
                {{ $t('termsConditions.cancellationWarning') }}
              </p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ $t('termsConditions.paymentTitle') }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ $t('termsConditions.paymentContent') }}
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ $t('termsConditions.responsibilityTitle') }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ $t('termsConditions.responsibilityContent') }}
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              {{ $t('termsConditions.disputesTitle') }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ $t('termsConditions.disputesContent') }}
            </p>
          </section>

          <div class="mt-12 pt-8 border-t border-gray-200">
            <p class="text-gray-600 mb-3">
              {{ $t('termsConditions.questions') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="tel:+31681914785" class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
                <Phone class="w-5 h-5 mr-2" />
                {{ $t('termsConditions.callUs') }} +31681914785
              </a>
              <a
                href="https://wa.me/31681914785"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {{ $t('termsConditions.whatsapp') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next';

useHead({
  title: 'Algemene Voorwaarden',
  meta: [
    {
      name: 'description',
      content: 'Algemene Voorwaarden van Huppie Taxi - Lees onze voorwaarden voor het gebruik van onze taxidiensten.',
    },
  ],
});
</script>
