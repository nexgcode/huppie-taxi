<template>
  <div>
    <header class="shadow-sm fixed w-full z-50 backdrop-blur bg-white/80">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-green-600">Huppie Taxi</NuxtLink>
          </div>
          <div class="flex items-center space-x-8">
            <div class="hidden md:flex items-center space-x-8">
              <NuxtLink to="/#services" class="text-gray-600 hover:text-green-600">{{ $t('nav.services') }}</NuxtLink>
              <NuxtLink to="/#why-us" class="text-gray-600 hover:text-green-600">{{ $t('nav.whyUs') }}</NuxtLink>
              <NuxtLink to="/#contact" class="text-gray-600 hover:text-green-600">{{ $t('nav.contact') }}</NuxtLink>
              <!-- Language Switcher for Desktop -->
              <div class="flex items-center border-gray-300 pl-4">
                <button
                  class="text-2xl hover:scale-110 transition-transform"
                  :title="locale === 'en' ? 'Switch to Dutch' : 'Switch to English'"
                  aria-label="Toggle language"
                  @click="switchLanguage(locale === 'en' ? 'nl' : 'en')"
                >
                  <img
                    v-if="locale === 'nl'"
                    src="/images/nl.png"
                    alt="nl"
                    class="w-[20px] h-[14px]"
                  >
                  <img
                    v-else
                    src="/images/en.png"
                    alt="en"
                    class="w-[20px] h-[14px]"
                  >
                </button>
              </div>
            </div>
            <!-- Phone Number -->
            <div class="hidden md:flex items-center">
              <a href="tel:+31681914785" class="flex items-center text-green-600 hover:text-green-700 font-semibold">
                <Phone class="w-5 h-5 mr-2" />
                +31681914785
              </a>
            </div>
          </div>

          <div class="md:hidden">
            <button class="text-gray-600 hover:text-green-600" @click="isMenuOpen = !isMenuOpen">
              <span class="sr-only">{{ $t('nav.menu') }}</span>
              <Menu v-if="!isMenuOpen" class="h-6 w-6" />
              <X v-else class="h-6 w-6" />
            </button>
          </div>
        </div>
        <!-- Mobile menu -->
        <div v-show="isMenuOpen" class="md:hidden mt-4 space-y-4">
          <NuxtLink to="/#services" class="block text-gray-600 hover:text-green-600">{{ $t('nav.services') }}</NuxtLink>
          <NuxtLink to="/#contact" class="block text-gray-600 hover:text-green-600">{{ $t('nav.contact') }}</NuxtLink>
          <div class="pt-4 border-t border-gray-200">
            <p class="text-sm text-gray-600 mb-2">
              {{ $t('nav.language') }}
            </p>
            <!-- Updated Mobile Language Switcher with Flag -->
            <button
              class="hover:scale-110 transition-transform"
              :title="locale === 'en' ? 'Switch to Dutch' : 'Switch to English'"
              aria-label="Toggle language"
              @click="switchLanguage(locale === 'en' ? 'nl' : 'en')"
            >
              <img
                v-if="locale === 'nl'"
                src="/images/nl.png"
                alt="nl"
                class="w-[20px] h-[14px]"
              >
              <img
                v-else
                src="/images/en.png"
                alt="en"
                class="w-[20px] h-[14px]"
              >
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main class="pt-4">
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">
              Huppie Taxis
            </h3>
            <p class="text-gray-400">
              {{ $t('footer.description') }}
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">
              {{ $t('footer.quickLinks') }}
            </h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/#services" class="text-gray-400 hover:text-white">{{ $t('footer.services') }}</NuxtLink></li>
              <li><NuxtLink to="/#contact" class="text-gray-400 hover:text-white">{{ $t('footer.contact') }}</NuxtLink></li>
              <li><NuxtLink to="/privacy-policy" class="text-gray-400 hover:text-white">{{ $t('footer.privacyPolicy') }}</NuxtLink></li>
              <li><NuxtLink to="/terms-conditions" class="text-gray-400 hover:text-white">{{ $t('footer.termsConditions') }}</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">
              {{ $t('footer.contactInfo') }}
            </h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center">
                <a href="tel:+31681914785" class="flex items-center text-green-600 hover:text-green-700 font-semibold">
                  <Phone class="w-4 h-4 mr-2" />
                  +31681914785
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {{ new Date().getFullYear() }} Huppie Taxis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Menu, X, Phone } from 'lucide-vue-next';

const isMenuOpen = ref(false);
const { setLocale, locale } = useI18n();

const switchLanguage = (lang: 'en' | 'nl') => {
  setLocale(lang);
};
</script>
