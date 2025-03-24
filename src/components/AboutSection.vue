<template>
  <section id="about" class="py-16 md:py-24 bg-white dark:bg-[#023535] transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {{ content.title }}
        </h2>
        <div class="w-20 h-1 bg-[#0CABA8] mx-auto mb-8"></div>
      </div>
      
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <div 
            class="bg-gray-100 dark:bg-[#015958] p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl"
            v-intersection-observer="{ callback: onIntersect, options: { threshold: 0.2 } }"
            :class="{ 'animate-slide-in-left': isVisible }"
          >
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Misión</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ content.mission }}
            </p>
          </div>
          
          <div 
            class="bg-gray-100 dark:bg-[#015958] p-8 rounded-lg shadow-lg mt-8 transform transition-all duration-500 hover:shadow-xl"
            v-intersection-observer="{ callback: onIntersect2, options: { threshold: 0.2 } }"
            :class="{ 'animate-slide-in-left': isVisible2 }"
          >
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Visión</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ content.vision }}
            </p>
          </div>
        </div>
        
        <div 
          class="w-full md:w-1/2 relative"
          v-intersection-observer="{ callback: onIntersect3, options: { threshold: 0.2 } }"
          :class="{ 'animate-slide-in-right': isVisible3 }"
        >
          <div class="relative z-10 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="/placeholder.svg?height=600&width=500" 
              alt="About Dexel"
              class="w-full h-auto transform transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div class="absolute -bottom-6 -left-6 w-full h-full bg-[#0FC2C0] rounded-lg -z-10"></div>
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
const isVisible = ref(false);
const isVisible2 = ref(false);
const isVisible3 = ref(false);

// Methods
const onIntersect = (entries, observer) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true;
  }
};

const onIntersect2 = (entries, observer) => {
  if (entries[0].isIntersecting) {
    isVisible2.value = true;
  }
};

const onIntersect3 = (entries, observer) => {
  if (entries[0].isIntersecting) {
    isVisible3.value = true;
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
.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

