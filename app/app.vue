<template>
  <div class="min-h-screen bg-white">
    <Toaster rich-colors />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css';

const { $config } = useNuxtApp();

useHead({
  titleTemplate: '%s | Huppie Taxi - Fast Taxi Service',
  meta: [
    { name: 'description', content: 'Huppie Taxi - Your fast choice for taxi services. Professional drivers, competitive rates, and quick transportation.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Huppie Taxi - Fast Taxi Service' },
    { property: 'og:description', content: 'Your fast choice for taxi services. Book your ride today!' },
    { name: 'keywords', content: 'Huppie Taxi, Taxi Nederland, Snelle taxiservice, Stadsritten taxi, Luchthavenvervoer taxi, Intercity taxi Nederland, Taxi lange afstand, Comfortabel taxi vervoer, Betrouwbare taxi, Professionele chauffeurs taxi, Taxi reserveren Nederland, Tarieven taxi, Taxi zonder verborgen kosten, Moderne taxi voertuigen, Efficiënte taxi service, Taxi voor drukke schema, Taxi contact Nederland' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  script: [
    {
      src: `https://maps.googleapis.com/maps/api/js?key=${$config.public.googleApiKey}&libraries=places&loading=async`,
      async: true,
      defer: true,
    },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
