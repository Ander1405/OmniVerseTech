<template>
  <header class="fixed top-0 left-0 w-full bg-white dark:bg-secondary shadow-md z-50 transition-colors duration-300">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="text-2xl font-bold text-primary dark:text-white">
          {{ logo.text }}
        </router-link>
      </div>
      
      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center space-x-8">
        <router-link 
          v-for="item in menuItems" 
          :key="item.name" 
          :to="item.path"
          class="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
          active-class="text-primary dark:text-primary-light font-medium"
        >
          {{ item.name }}
        </router-link>
        
        <!-- Language Toggle -->
        <button 
          @click="$emit('toggle-language')" 
          class="px-3 py-1 border border-primary rounded text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          aria-label="Cambiar idioma"
        >
          {{ currentLanguage === 'es' ? 'EN' : 'ES' }}
        </button>
        
        <!-- Dark Mode Toggle -->
        <button 
          @click="$emit('toggle-dark-mode')" 
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label="Cambiar modo oscuro"
        >
          <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label="Menú móvil"
        :aria-expanded="isMobileMenuOpen"
      >
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <transition 
      name="slide-down"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-10"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-10"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden bg-white dark:bg-secondary shadow-md transition-all duration-300"
      >
        <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name" 
            :to="item.path"
            @click="closeMobileMenu"
            class="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors duration-300 py-2"
            active-class="text-primary dark:text-primary-light font-medium"
          >
            {{ item.name }}
          </router-link>
          
          <div class="flex space-x-4 py-2">
            <!-- Language Toggle -->
            <button 
              @click="$emit('toggle-language')" 
              class="px-3 py-1 border border-primary rounded text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Cambiar idioma"
            >
              {{ currentLanguage === 'es' ? 'EN' : 'ES' }}
            </button>
            
            <!-- Dark Mode Toggle -->
            <button 
              @click="$emit('toggle-dark-mode')" 
              class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Cambiar modo oscuro"
            >
              <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// Props
const props = defineProps({
  logo: {
    type: Object,
    required: true
  },
  menuItems: {
    type: Array,
    required: true
  },
  currentLanguage: {
    type: String,
    required: true
  },
  isDarkMode: {
    type: Boolean,
    default: false
  }
});

// Emits
defineEmits(['toggle-language', 'toggle-dark-mode']);

// State
const isMobileMenuOpen = ref(false);
const route = useRoute();

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

