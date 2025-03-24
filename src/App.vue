<template>
    <div class="app" :class="{ 'dark': isDarkMode }">
        <TheHeader
            :logo="logo"
            :menuItems="menuItems"
            :currentLanguage="currentLanguage"
            :isDarkMode="isDarkMode"
            @toggle-language="toggleLanguage"
            @toggle-dark-mode="toggleDarkMode"
        />
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <TheFooter
            :menuItems="menuItems"
            :socialLinks="socialLinks"
            :currentLanguage="currentLanguage"
        />
        <div class="fixed bottom-8 right-8 z-50">
            <a
                href="https://wa.me/3135632235"
                target="_blank"
                class="flex items-center justify-center w-14 h-14 bg-primary text-white hover:bg-primary-dark rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Contactar por WhatsApp"
            >
                <PhChatCircle :size="36"/>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, provide } from 'vue';
import {PhChatCircle} from "@phosphor-icons/vue";
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';

const currentLanguage = ref(localStorage.getItem('language') || 'es');
const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

provide('currentLanguage', currentLanguage);
provide('isDarkMode', isDarkMode);

const logo = {
  text: 'Dexel',
  alt: 'Dexel Logo'
};

const menuItems = computed(() => [
    {
        name: currentLanguage.value === 'es' ? 'Inicio' : 'Home',
        path: '/'
    },
    {
        name: currentLanguage.value === 'es' ? 'Servicios' : 'Services',
        path: '/servicios'
    },
    {
        name: currentLanguage.value === 'es' ? 'Nosotros' : 'About',
        path: '/nosotros'
    },
    {
        name: currentLanguage.value === 'es' ? 'Contacto' : 'Contact',
        path: '/contacto'
    }
]);

const socialLinks = [
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@dexel.technology?_t=ZM-8uxk7S1703p&_r=1',
        icon: 'facebook'
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/dexeltechnology?utm_source=qr&igsh=ZXljbnBodmMwbm1q',
        icon: 'instagram'
    }
];

const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLanguage.value);
};

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('darkMode', isDarkMode.value);
};

watch(isDarkMode, (newValue) => {
    if (newValue) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

onMounted(() => {
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    }
    if (localStorage.getItem('darkMode') === null) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDarkMode.value = prefersDark;
        localStorage.setItem('darkMode', prefersDark);
        if (prefersDark) {
            document.documentElement.classList.add('dark');
        }
    }
});
</script>

