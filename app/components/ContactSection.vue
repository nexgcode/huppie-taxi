<template>
  <section id="contact" class="py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">
        {{ $t('contact.title') }}
      </h2>
      <div class="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from './ContactForm.vue';
</script>
