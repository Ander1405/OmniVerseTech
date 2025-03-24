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
          href="https://wa.me/1234567890"
          target="_blank"
          class="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-dark rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, provide } from 'vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';

// State
const currentLanguage = ref(localStorage.getItem('language') || 'es');
const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

// Provide values to child components
provide('currentLanguage', currentLanguage);
provide('isDarkMode', isDarkMode);

// Logo
const logo = {
  text: 'Dexel',
  alt: 'OmniVerse Tech Logo'
};

// Menu Items
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

// Social Links
const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: 'facebook'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: 'twitter'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: 'instagram'
  }
];

// Methods
const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'es' ? 'en' : 'es';
  localStorage.setItem('language', currentLanguage.value);
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value);
};

// Apply dark mode to document
watch(isDarkMode, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

// Check system preference on mount
onMounted(() => {
  // Apply dark mode on initial load
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  }

  // Check if user has a preference stored
  if (localStorage.getItem('darkMode') === null) {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDarkMode.value = prefersDark;
    localStorage.setItem('darkMode', prefersDark);

    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }
});
</script>

