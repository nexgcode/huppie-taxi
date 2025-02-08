<template>
  <div class="min-h-screen bg-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s | GroenTaxi - Eco-Friendly Taxi Service',
  meta: [
    { name: 'description', content: 'GroenTaxi - Your sustainable choice for eco-friendly taxi services. Professional drivers, competitive rates, and a commitment to the environment.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'GroenTaxi - Eco-Friendly Taxi Service' },
    { property: 'og:description', content: 'Your sustainable choice for eco-friendly taxi services. Book your green ride today!' },
    { property: 'og:image', content: '/images/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

