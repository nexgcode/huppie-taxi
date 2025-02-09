<template>
  <div>
    <header class="shadow-sm fixed w-full z-50 backdrop-blur bg-white/60">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-green-600">EV-Horizon</NuxtLink>
          </div>
          <div class="hidden md:flex space-x-8">
            <NuxtLink to="/#services" class="text-gray-600 hover:text-green-600">{{ $t('nav.services') }}</NuxtLink>
            <NuxtLink to="/#why-us" class="text-gray-600 hover:text-green-600">{{ $t('nav.whyUs') }}</NuxtLink>
            <NuxtLink to="/#pricing" class="text-gray-600 hover:text-green-600">{{ $t('nav.pricing') }}</NuxtLink>
            <NuxtLink to="/#contact" class="text-gray-600 hover:text-green-600">{{ $t('nav.contact') }}</NuxtLink>
          </div>
          <!-- Language Switcher -->
          <div class="hidden md:flex items-center space-x-4">
            <button @click="switchLanguage('en')" :class="{'text-green-600': locale === 'en', 'text-gray-600': locale !== 'en'}" class="hover:text-green-600">
              EN
            </button>
            <span class="text-gray-300">|</span>
            <button @click="switchLanguage('nl')" :class="{'text-green-600': locale === 'nl', 'text-gray-600': locale !== 'nl'}" class="hover:text-green-600">
              NL
            </button>
          </div>
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600 hover:text-green-600">
              <span class="sr-only">{{ $t('nav.menu') }}</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile menu -->
        <div v-show="isMenuOpen" class="md:hidden mt-4 space-y-4">
          <NuxtLink to="/#services" class="block text-gray-600 hover:text-green-600">{{ $t('nav.services') }}</NuxtLink>
          <NuxtLink to="/#about" class="block text-gray-600 hover:text-green-600">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink to="/#contact" class="block text-gray-600 hover:text-green-600">{{ $t('nav.contact') }}</NuxtLink>
          <div class="pt-4 border-t border-gray-200">
            <p class="text-sm text-gray-600 mb-2">{{ $t('nav.language') }}</p>
            <div class="flex space-x-4">
              <button @click="switchLanguage('en')" :class="{'text-green-600': locale === 'en', 'text-gray-600': locale !== 'en'}" class="hover:text-green-600">
                EN
              </button>
              <span class="text-gray-300">|</span>
              <button @click="switchLanguage('nl')" :class="{'text-green-600': locale === 'nl', 'text-gray-600': locale !== 'nl'}" class="hover:text-green-600">
                NL
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="pt-20">
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">EV-Horizon</h3>
            <p class="text-gray-400">{{ $t('footer.description') }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ $t('footer.quickLinks') }}</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/#services" class="text-gray-400 hover:text-white">{{ $t('footer.services') }}</NuxtLink></li>
              <li><NuxtLink to="/#pricing" class="text-gray-400 hover:text-white">{{ $t('footer.pricing') }}</NuxtLink></li>
              <li><NuxtLink to="/#contact" class="text-gray-400 hover:text-white">{{ $t('footer.contact') }}</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contactInfo') }}</h3>
            <ul class="space-y-2 text-gray-400">
              <li>📞 {{ $t('footer.phone') }}</li>
              <li>✉️ {{ $t('footer.email').replace('{at}', '@') }}</li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {{ new Date().getFullYear() }} EV-Horizon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const { locale } = useI18n()

const switchLanguage = (lang: 'en' | 'nl') => {
  locale.value = lang
}
</script>
