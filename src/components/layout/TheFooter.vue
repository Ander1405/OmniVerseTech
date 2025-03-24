<template>
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
                <div>
                    <h3 class="text-xl font-bold mb-1">Dexel</h3>
                    <p class="text-gray-400 mb-1">
                        {{ currentLanguage === 'es' ? 'Soluciones tecnológicas sin límites' : 'Technology Solutions Without Limits' }}
                    </p>
                    <div class="flex space-x-1">
                        <a
                            v-for="link in socialLinks"
                            :key="link.name"
                            :href="link.href"
                            target="_blank"
                            class="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                            :aria-label="link.name"
                        >
                            <template v-if="link.icon === 'facebook'">
                                <PhTiktokLogo :size="24"/>
                            </template>
                            <template v-else-if="link.icon === 'instagram'">
                                <PhInstagramLogo :size="24"/>
                            </template>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-1">
                        {{ currentLanguage === 'es' ? 'Contacto' : 'Contact' }}
                    </h3>
                    <ul class="space-y-2">
                        <li class="flex items-start gap-x-2">
                            <PhEnvelopeSimple class="text-primary" :size="24"/>
                            <a href="mailto:info@omniversetech.com" class="text-gray-400 hover:text-primary transition-colors duration-300">dexelinfo@gmail.com</a>
                        </li>
                        <li class="flex items-start gap-x-2">
                            <PhPhone class="text-primary" :size="24"/>
                            <a href="tel:+11234567890" class="text-gray-400 hover:text-primary transition-colors duration-300">+57 3135632235</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-700  flex flex-col md:flex-row justify-center items-center pt-6">
                <p class="text-gray-400 text-sm md:mb-0">
                    © {{ new Date().getFullYear() }} Dexel.
                    {{ currentLanguage === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.' }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { PhEnvelopeSimple, PhPhone, PhTiktokLogo, PhInstagramLogo } from "@phosphor-icons/vue";

const props = defineProps({
    menuItems: {
        type: Array,
        required: true
    },
    socialLinks: {
        type: Array,
        required: true
    },
    currentLanguage: {
        type: String,
        default: 'es'
    }
});
</script>
