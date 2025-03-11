<template>
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-100 dark:from-secondary dark:to-secondary-dark transition-colors duration-300">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h1 
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight animate-fade-in"
        >
          {{ content.title }}
        </h1>
        <p 
          class="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-200"
        >
          {{ content.subtitle }}
        </p>
        <router-link 
          to="/contacto" 
          class="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-400"
        >
          {{ content.cta }}
        </router-link>
      </div>
      <div class="w-full md:w-1/2 relative animate-fade-in animation-delay-600">
        <div class="relative z-10 transform transition-transform duration-500 hover:scale-105">
<!--          <img -->
<!--            src="/images/hero-image.webp" -->
<!--            alt="Technology Solutions" -->
<!--            class="w-full h-auto rounded-lg shadow-xl"-->
<!--            loading="eager"-->
<!--            width="600"-->
<!--            height="500"-->
<!--          />-->
        </div>
        <div class="absolute -bottom-6 -right-6 w-full h-full bg-primary-light rounded-lg -z-10 transform transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out forwards;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
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

