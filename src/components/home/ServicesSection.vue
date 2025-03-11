<template>
  <section id="services" class="py-16 md:py-24 bg-white dark:bg-secondary transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          {{ content.title }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ content.subtitle }}
        </p>
        <div class="w-20 h-1 bg-primary mx-auto mt-6"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(service, index) in content.items" 
          :key="service.id"
          class="bg-gray-50 dark:bg-secondary-dark rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl group"
          v-intersection-observer="{ callback: (entries) => onIntersect(entries, index), options: { threshold: 0.2 } }"
          :class="{ 'animate-zoom-in': visibleServices[index] }"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
          :id="service.id"
        >
          <div class="bg-primary p-6 text-center relative overflow-hidden">
            <!-- Service Icon -->
            <div class="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-primary-light rounded-full opacity-20"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <!-- Layout icon (default) -->
                  <template v-if="service.icon === 'layout'">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </template>
                  
                  <!-- Globe icon -->
                  <template v-else-if="service.icon === 'globe'">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </template>
                  
                  <!-- Code icon -->
                  <template v-else-if="service.icon === 'code'">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </template>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">{{ service.title }}</h3>
              <div class="text-3xl font-bold text-white">{{ service.price }}</div>
            </div>
          </div>
          
          <div class="p-6">
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-center">{{ service.description }}</p>
            <ul class="space-y-3">
              <li 
                v-for="(feature, featureIndex) in service.features" 
                :key="featureIndex"
                class="flex items-center text-gray-700 dark:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          
          <div class="p-6 pt-0 text-center">
            <router-link 
              :to="`/servicios#${service.id}`" 
              class="inline-block w-full py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-300"
            >
              {{ currentLanguage === 'es' ? 'Más información' : 'Learn more' }}
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <router-link 
          to="/servicios" 
          class="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-300"
        >
          {{ content.cta }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue';

// Props
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
});

// Get current language from parent
const currentLanguage = inject('currentLanguage');

// State
const visibleServices = ref({});

// Methods
const onIntersect = (entries, index) => {
  if (entries[0].isIntersecting) {
    visibleServices.value[index] = true;
  }
};

// Custom directive for intersection observer
const vIntersectionObserver = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(binding.value.callback, binding.value.options);
    observer.observe(el);
    el._observer = observer;
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect();
    }
  }
};
</script>

<style scoped>
.animate-zoom-in {
  animation: zoomIn 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

