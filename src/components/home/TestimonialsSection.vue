<template>
  <section class="py-16 md:py-24 bg-white dark:bg-secondary transition-colors duration-300">
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
          v-for="(testimonial, index) in content.items" 
          :key="index"
          class="bg-gray-50 dark:bg-secondary-dark rounded-xl shadow-lg p-6 relative"
          v-intersection-observer="{ callback: (entries) => onIntersect(entries, index), options: { threshold: 0.2 } }"
          :class="{ 'animate-slide-in': visibleTestimonials[index] }"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <!-- Quote icon -->
          <div class="absolute top-4 right-4 text-primary opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <p class="text-gray-600 dark:text-gray-300 mb-6 relative z-10">{{ testimonial.text }}</p>
          
          <div class="flex items-center">
            <img 
              :src="testimonial.image" 
              :alt="testimonial.name" 
              class="w-12 h-12 rounded-full object-cover mr-4"
              loading="lazy"
              width="48"
              height="48"
            />
            <div>
              <h4 class="font-bold text-gray-800 dark:text-white">{{ testimonial.name }}</h4>
              <p class="text-gray-500 dark:text-gray-400 text-sm">{{ testimonial.company }}</p>
            </div>
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
const visibleTestimonials = ref({});

// Methods
const onIntersect = (entries, index) => {
  if (entries[0].isIntersecting) {
    visibleTestimonials.value[index] = true;
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
.animate-slide-in {
  animation: slideIn 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

