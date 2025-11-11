<template>
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
    <form class="space-y-4" @submit.prevent="handleSubmit">
      <div>
        <Label for="email" class="text-sm font-semibold text-gray-700 mb-1">
          {{ $t('form.contactEmail') }} <span class="text-red-500">*</span>
        </Label>
        <Input
          v-model="formData.email"
          autocomplete="off"
          name="email"
          type="email"
          required
          class="w-full"
          placeholder="email@example.com"
        />
      </div>

      <div>
        <Label for="phone" class="text-sm font-semibold text-gray-700 mb-1">
          {{ $t('form.contactPhone') }} <span class="text-red-500">*</span>
        </Label>
        <Input
          v-model="formData.phone"
          autocomplete="off"
          name="phone"
          type="tel"
          required
          class="w-full"
          :placeholder="$t('form.contactPhonePlaceholder')"
        />
      </div>

      <div>
        <Label for="message" class="text-sm font-semibold text-gray-700 mb-1">
          {{ $t('form.contactMessage') }} <span class="text-red-500">*</span>
        </Label>
        <Textarea
          v-model="formData.message"
          autocomplete="off"
          name="message"
          rows="4"
          class="w-full resize-none"
          :placeholder="$t('form.contactMessagePlaceholder')"
          required
        />
      </div>

      <Button
        type="submit"
        :disabled="!isFormValid || isSubmitting"
        class="w-full bg-green-600 hover:bg-green-700 text-white"
        size="default"
      >
        {{ isSubmitting ? $t('form.contactSending') : $t('form.contactSendMessage') }}
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue-sonner';

const isSubmitting = ref(false);

const formData = ref({
  email: '',
  phone: '',
  message: '',
});

const isFormValid = computed(() => {
  return formData.value.email.trim() !== ''
    && formData.value.phone.trim() !== ''
    && formData.value.message.trim() !== '';
});

const handleSubmit = async () => {
  if (!isFormValid.value) {
    return;
  }

  isSubmitting.value = true;

  try {
    const message = `Email:\n${formData.value.email}\nPhone:\n${formData.value.phone}\n\nMessage:\n${formData.value.message}`;

    await $fetch('/api/send-telegram', {
      method: 'POST',
      body: {
        message,
        title: 'Contact Request',
      },
    });

    formData.value = {
      email: '',
      phone: '',
      message: '',
    };

    toast.success('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message:', error);
    toast.error('Failed to send message. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>
