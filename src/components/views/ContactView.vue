<template>
    <main>
        <section class="pt-32 pb-16 bg-gradient-to-br from-white to-gray-100 dark:from-secondary dark:to-secondary-dark transition-colors duration-300">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                        {{ translations[currentLanguage].title }}
                    </h1>
                    <p class="text-xl text-gray-600 dark:text-gray-300">
                        {{ translations[currentLanguage].subtitle }}
                    </p>
                </div>
            </div>
        </section>

        <section class="py-16 bg-white dark:bg-secondary transition-colors duration-300">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto bg-gray-50 dark:bg-secondary-dark rounded-xl shadow-xl overflow-hidden">
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full md:w-1/2 p-8 md:p-12">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                {{ translations[currentLanguage].formTitle }}
                            </h2>
                            <form @submit.prevent="submitForm" class="space-y-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {{ translations[currentLanguage].nameLabel }}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        v-model="form.name"
                                        :placeholder="translations[currentLanguage].namePlaceholder"
                                        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary dark:bg-secondary dark:text-white focus:outline-none"
                                        :class="{ 'border-red-500': errors.name }"
                                    />
                                    <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ translations[currentLanguage].requiredField }}</p>
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {{ translations[currentLanguage].emailLabel }}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        v-model="form.email"
                                        :placeholder="translations[currentLanguage].emailPlaceholder"
                                        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary dark:bg-secondary dark:text-white focus:outline-none"
                                        :class="{ 'border-red-500': errors.email }"
                                    />
                                    <p v-if="errors.email" class="mt-1 text-sm text-red-500">
                                        {{ errors.email === 'required' ? translations[currentLanguage].requiredField : translations[currentLanguage].invalidEmail }}
                                    </p>
                                </div>
                                <div>
                                    <label for="service" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {{ translations[currentLanguage].serviceLabel }}
                                    </label>
                                    <select
                                        id="service"
                                        v-model="form.service"
                                        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary dark:bg-secondary dark:text-white focus:outline-none"
                                    >
                                        <option value="">{{ translations[currentLanguage].serviceDefault }}</option>
                                        <option v-for="service in translations[currentLanguage].serviceOptions" :key="service.value" :value="service.value">
                                            {{ service.label }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {{ translations[currentLanguage].messageLabel }}
                                    </label>
                                    <textarea
                                        id="message"
                                        v-model="form.message"
                                        :placeholder="translations[currentLanguage].messagePlaceholder"
                                        rows="4"
                                        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary dark:bg-secondary dark:text-white focus:outline-none"
                                        :class="{ 'border-red-500': errors.message }"
                                    ></textarea>
                                    <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ translations[currentLanguage].requiredField }}</p>
                                </div>
                                <button
                                    type="submit"
                                    class="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl shadow-md transition-colors duration-300"
                                    :disabled="isSubmitting"
                                >
                                    <span v-if="isSubmitting">{{ translations[currentLanguage].submitting }}</span>
                                    <span v-else>{{ translations[currentLanguage].submitButton }}</span>
                                </button>
                                <div v-if="formSubmitted" class="p-4 bg-green-100 text-green-700 rounded-lg">
                                    {{ translations[currentLanguage].successMessage }}
                                </div>
                            </form>
                        </div>
                        <div class="w-full md:w-1/2 bg-primary p-8 md:p-12 text-white">
                            <h2 class="text-2xl font-bold mb-6">{{ translations[currentLanguage].contactInfoTitle }}</h2>
                            <div class="space-y-6">
                                <div class="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold mb-1">{{ translations[currentLanguage].phoneLabel }}</h4>
                                        <a href="tel:+11234567890" class="hover:underline">+1 (123) 456-7890</a>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold mb-1">{{ translations[currentLanguage].emailLabel }}</h4>
                                        <a href="mailto:info@omniversetech.com" class="hover:underline">info@omniversetech.com</a>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-12">
                                <h4 class="font-semibold mb-3">{{ translations[currentLanguage].socialLabel }}</h4>
                                <div class="flex space-x-4">
                                    <a href="https://facebook.com" target="_blank" class="text-white hover:text-gray-200 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com" target="_blank" class="text-white hover:text-gray-200 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" class="text-white hover:text-gray-200 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="mt-12">
                                <h4 class="font-semibold mb-3">{{ translations[currentLanguage].hoursLabel }}</h4>
                                <p>{{ translations[currentLanguage].hoursText }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </main>
</template>

<script setup>
import { ref, reactive, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const currentLanguage = inject('currentLanguage');
const route = useRoute();

const form = reactive({
  name: '',
  email: '',
  service: '',
  message: ''
});

onMounted(() => {
  // Preseleccionar el servicio si viene en la URL
  if (route.query.service) {
    form.service = route.query.service;
  }
});

const errors = reactive({
  name: '',
  email: '',
  message: ''
});
const isSubmitting = ref(false);
const formSubmitted = ref(false);

const translations = {
    es: {
        title: 'Contáctanos',
        subtitle: 'Estamos aquí para ayudarte con tu proyecto',
        formTitle: 'Envíanos un mensaje',
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'tu@email.com',
        serviceLabel: 'Servicio de interés',
        serviceDefault: 'Selecciona un servicio',
        serviceOptions: [
            { value: 'pagina-web', label: 'Páginas web ($100)' },
            { value: 'sitio-web', label: 'Sitios web ($300)' },
            { value: 'aplicacion-web', label: 'Aplicaciones Web (desde $1,000)' },
            { value: 'other', label: 'Otro / No estoy seguro' }
        ],
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuéntanos sobre tu proyecto...',
        submitButton: 'Enviar mensaje',
        submitting: 'Enviando...',
        requiredField: 'Este campo es requerido',
        invalidEmail: 'Por favor ingresa un correo válido',
        successMessage: '¡Gracias por tu mensaje! Te contactaremos pronto.',
        contactInfoTitle: 'Información de contacto',
        phoneLabel: 'Teléfono',
        addressLabel: 'Dirección',
        socialLabel: 'Síguenos',
        hoursLabel: 'Horario de atención',
        hoursText: 'Lunes a Viernes: 9:00 AM - 6:00 PM (PST)'
    },
    en: {
        title: 'Contact Us',
        subtitle: 'We are here to help you with your project',
        formTitle: 'Send us a message',
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        serviceLabel: 'Service of interest',
        serviceDefault: 'Select a service',
        serviceOptions: [
            { value: 'pagina-web', label: 'Web Pages ($100)' },
            { value: 'sitio-web', label: 'Websites ($300)' },
            { value: 'aplicacion-web', label: 'Web Applications (from $1,000)' },
            { value: 'other', label: 'Other / Not sure' }
        ],
        messageLabel: 'Message',
        messagePlaceholder: 'Tell us about your project...',
        submitButton: 'Send message',
        submitting: 'Sending...',
        requiredField: 'This field is required',
        invalidEmail: 'Please enter a valid email',
        successMessage: 'Thank you for your message! We will contact you soon.',
        contactInfoTitle: 'Contact Information',
        phoneLabel: 'Phone',
        addressLabel: 'Address',
        socialLabel: 'Follow us',
        hoursLabel: 'Business Hours',
        hoursText: 'Monday to Friday: 9:00 AM - 6:00 PM (PST)'
    }
};

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateForm = () => {
  let isValid = true;
  
  // Reset errors
  errors.name = '';
  errors.email = '';
  errors.message = '';
  
  // Validate name
  if (!form.name.trim()) {
    errors.name = 'required';
    isValid = false;
  }
  
  // Validate email
  if (!form.email.trim()) {
    errors.email = 'required';
    isValid = false;
  } else if (!validateEmail(form.email)) {
    errors.email = 'invalid';
    isValid = false;
  }
  
  // Validate message
  if (!form.message.trim()) {
    errors.message = 'required';
    isValid = false;
  }
  
  return isValid;
};

const submitForm = async () => {
  if (validateForm()) {
    isSubmitting.value = true;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      form.name = '';
      form.email = '';
      form.service = '';
      form.message = '';
      
      // Show success message
      formSubmitted.value = true;
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        formSubmitted.value = false;
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      isSubmitting.value = false;
    }
  }
};
</script>

<script>
// For SEO meta tags
export default {
  metaInfo() {
    return {
      title: this.currentLanguage === 'es' ? 'Contacto | OmniVerse Tech' : 'Contact | OmniVerse Tech',
      meta: [
        { 
          name: 'description', 
          content: this.currentLanguage === 'es' 
            ? 'Contáctanos para solicitar una cotización o para más información sobre nuestros servicios de desarrollo web.' 
            : 'Contact us to request a quote or for more information about our web development services.'
        }
      ]
    };
  }
}
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-w-16 iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

