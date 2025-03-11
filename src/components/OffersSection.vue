<template>
  <section class="py-16 md:py-24 bg-white dark:bg-[#023535] transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {{ content.title }}
        </h2>
        <div class="w-20 h-1 bg-[#0CABA8] mx-auto mb-8"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div 
          v-for="(offer, index) in content.items" 
          :key="index"
          class="bg-gray-100 dark:bg-[#015958] rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl group"
          v-intersection-observer="{ callback: (entries) => onIntersect(entries, index), options: { threshold: 0.2 } }"
          :class="{ 'animate-zoom-in': visibleOffers[index] }"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <div class="bg-[#0CABA8] p-6 text-center">
            <h3 class="text-2xl font-bold text-white mb-2">{{ offer.title }}</h3>
            <div class="text-3xl font-bold text-white">{{ offer.price }}</div>
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li 
                v-for="(feature, featureIndex) in offer.features" 
                :key="featureIndex"
                class="flex items-center text-gray-700 dark:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#0CABA8] mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="p-6 pt-0 text-center">
            <a 
              href="#contact" 
              class="inline-block w-full py-3 bg-[#0CABA8] hover:bg-[#008F8C] text-white font-medium rounded-lg transition-colors duration-300"
            >
              {{ content.cta }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Props
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
});

// State
const visibleOffers = ref({});

// Methods
const onIntersect = (entries, index) => {
  if (entries[0].isIntersecting) {
    visibleOffers.value[index] = true;
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

