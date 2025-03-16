<template>
  <section class="py-16 md:py-24 bg-gray-50 dark:bg-secondary-dark transition-colors duration-300">
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
      
      <div 
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
        v-intersection-observer="{ callback: onIntersect, options: { threshold: 0.2 } }"
        :class="{ 'animate-fade-in': isVisible }"
      >
        <div 
          v-for="(tech, index) in content.techs" 
          :key="tech.name"
          class="flex flex-col items-center justify-center p-4 bg-white dark:bg-secondary rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <img 
            :src="tech.icon" 
            :alt="tech.name" 
            class="w-16 h-16 object-contain mb-3"
            loading="lazy"
            width="64"
            height="64"
          />
          <span class="text-gray-700 dark:text-gray-300 font-medium">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  content: {
    type: Object,
    required: true
  }
});

const isVisible = ref(false);

const onIntersect = (entries) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true;
  }
};

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
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

