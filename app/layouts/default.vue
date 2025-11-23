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
              <li class="flex items-center">
                <a
                  href="https://wa.me/31681914785"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center text-green-600 hover:text-green-700 font-semibold"
                >
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
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
