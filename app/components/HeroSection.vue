<template>
  <section
    class="relative py-16 sm:py-24 bg-cover bg-bottom bg-no-repeat min-h-screen flex items-center justify-center"
    :style="{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(/images/tesla.jpeg)',
    }"
  >
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <h1 class="text-4xl sm:text-5xl font-bold text-white leading-tight">
            {{ $t('hero.title') }}
          </h1>
          <p class="text-xl text-gray-200">
            {{ $t('hero.description') }}
          </p>
        </div>
        <div>
          <BookingForm />
        </div>
      </div>
    </div>
  </section>
</template>
