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
                            <div class="flex flex-col gap-y-6">
                                <div>
                                    <div class="flex items-center gap-x-1.5">
                                        <PhPhone :size="32"/>
                                        <span>{{ translations[currentLanguage].phoneTitle }}</span>
                                    </div>
                                    <span class="ml-8">+57 3135632235</span>
                                </div>
                                <div>
                                    <div class="flex items-center gap-x-1.5">
                                        <PhEnvelopeSimple :size="32"/>
                                        <span>{{ translations[currentLanguage].emailTitle }}</span>
                                    </div>
                                    <span class="ml-8">dexelinfo@gmail.com</span>
                                </div>
                            </div>
                            <div class="mt-12 ml-1.5">
                                <h4 class="font-semibold mb-3">{{ translations[currentLanguage].socialLabel }}</h4>
                                <div class="flex space-x-4">
                                    <a href="https://www.instagram.com/dexeltechnology?utm_source=qr&igsh=ZXljbnBodmMwbm1q" target="_blank" class="text-white hover:text-gray-200 transition-colors duration-300">
                                        <PhInstagramLogo class="text-white" :size="32"/>
                                    </a>
                                    <a href="https://www.tiktok.com/@dexel.technology?_t=ZM-8uxk7S1703p&_r=1" target="_blank" class="text-white hover:text-gray-200 transition-colors duration-300">
                                        <PhTiktokLogo :size="32" />
                                    </a>
                                </div>
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
import {PhEnvelopeSimple, PhInstagramLogo, PhPhone, PhTiktokLogo,} from "@phosphor-icons/vue";
import { useRoute } from 'vue-router';
import WhatsappService from '@/services/WhatsappChatService';

const currentLanguage = inject('currentLanguage');
const route = useRoute();

const whatsappService = new WhatsappService('573135632235');

const form = reactive({
    name: '',
    email: '',
    service: '',
    message: ''
});

onMounted(() => {
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
        phoneTitle: 'Teléfono de contacto',
        emailTitle: 'Correo electrónico',
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
        phoneTitle: 'Contact Phone',
        emailTitle: 'Email Address',
    }
};

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateForm = () => {
    let isValid = true;
    errors.name = '';
    errors.email = '';
    errors.message = '';

    if (!form.name.trim()) {
        errors.name = 'required';
        isValid = false;
    }

    if (!form.email.trim()) {
        errors.email = 'required';
        isValid = false;
    } else if (!validateEmail(form.email)) {
        errors.email = 'invalid';
        isValid = false;
    }

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
            await new Promise(resolve => setTimeout(resolve, 1500));
            whatsappService.sendMessage({
                nombre: form.name,
                email: form.email,
                servicio: form.service,
                mensaje: form.message
            });

            form.name = '';
            form.email = '';
            form.service = '';
            form.message = '';

            formSubmitted.value = true;

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
  padding-bottom: 56.25%;
}

.aspect-w-16 iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

