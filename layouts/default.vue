<template>
  <div>
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-green-600">GroenTaxi</NuxtLink>
          </div>
          <div class="hidden md:flex space-x-8">
            <NuxtLink to="/#services" class="text-gray-600 hover:text-green-600">Services</NuxtLink>
            <NuxtLink to="/#why-us" class="text-gray-600 hover:text-green-600">Why Us</NuxtLink>
            <NuxtLink to="/#pricing" class="text-gray-600 hover:text-green-600">Pricing</NuxtLink>
            <NuxtLink to="/#contact" class="text-gray-600 hover:text-green-600">Contact</NuxtLink>
          </div>
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600 hover:text-green-600">
              <span class="sr-only">Menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile menu -->
        <div v-show="isMenuOpen" class="md:hidden mt-4 space-y-4">
          <NuxtLink to="/#services" class="block text-gray-600 hover:text-green-600">Services</NuxtLink>
          <NuxtLink to="/#why-us" class="block text-gray-600 hover:text-green-600">Why Us</NuxtLink>
          <NuxtLink to="/#pricing" class="block text-gray-600 hover:text-green-600">Pricing</NuxtLink>
          <NuxtLink to="/#contact" class="block text-gray-600 hover:text-green-600">Contact</NuxtLink>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">GroenTaxi</h3>
            <p class="text-gray-400">Your eco-friendly taxi service in the Netherlands.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/#services" class="text-gray-400 hover:text-white">Services</NuxtLink></li>
              <li><NuxtLink to="/#pricing" class="text-gray-400 hover:text-white">Pricing</NuxtLink></li>
              <li><NuxtLink to="/#contact" class="text-gray-400 hover:text-white">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li>📞 +31 20 123 4567</li>
              <li>✉️ info@groentaxi.nl</li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&amp;copy; {{ new Date().getFullYear() }} GroenTaxi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>
