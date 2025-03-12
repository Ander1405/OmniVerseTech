<template>
  <section class="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        {{ content.title }}
      </h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto opacity-90">
        {{ content.subtitle }}
      </p>
      <router-link 
        to="/contacto" 
        class="inline-block px-8 py-4 bg-white text-primary hover:bg-gray-100 font-medium rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
      >
        {{ content.buttonText }}
      </router-link>
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

