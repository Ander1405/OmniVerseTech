<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">OmniVerse Tech</h3>
          <p class="text-gray-400 mb-4">
            {{ currentLanguage === 'es' ? 'Soluciones tecnológicas sin límites' : 'Technology Solutions Without Limits' }}
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="link in socialLinks" 
              :key="link.name" 
              :href="link.href" 
              target="_blank"
              class="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              :aria-label="link.name"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <!-- Facebook icon -->
                <template v-if="link.icon === 'facebook'">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </template>
                
                <!-- Twitter icon -->
                <template v-else-if="link.icon === 'twitter'">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </template>
                
                <!-- LinkedIn icon -->
                <template v-else-if="link.icon === 'linkedin'">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </template>
                
                <!-- Instagram icon -->
                <template v-else-if="link.icon === 'instagram'">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </template>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">
            {{ currentLanguage === 'es' ? 'Enlaces Rápidos' : 'Quick Links' }}
          </h3>
          <ul class="space-y-2">
            <li v-for="item in menuItems" :key="item.name">
              <router-link 
                :to="item.path" 
                class="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">
            {{ currentLanguage === 'es' ? 'Servicios' : 'Services' }}
          </h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/servicios#landing" class="text-gray-400 hover:text-primary transition-colors duration-300">
                {{ currentLanguage === 'es' ? 'Landing Pages' : 'Landing Pages' }}
              </router-link>
            </li>
            <li>
              <router-link to="/servicios#web" class="text-gray-400 hover:text-primary transition-colors duration-300">
                {{ currentLanguage === 'es' ? 'Páginas Web' : 'Websites' }}
              </router-link>
            </li>
            <li>
              <router-link to="/servicios#app" class="text-gray-400 hover:text-primary transition-colors duration-300">
                {{ currentLanguage === 'es' ? 'Aplicaciones Web' : 'Web Applications' }}
              </router-link>
            </li>
            <li>
              <router-link to="/servicios" class="text-gray-400 hover:text-primary transition-colors duration-300">
                {{ currentLanguage === 'es' ? 'Ver todos los servicios' : 'View all services' }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">
            {{ currentLanguage === 'es' ? 'Contacto' : 'Contact' }}
          </h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span class="text-gray-400">
                123 Tech Street, Suite 456<br>San Francisco, CA 94107
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:info@omniversetech.com" class="text-gray-400 hover:text-primary transition-colors duration-300">info@omniversetech.com</a>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="tel:+11234567890" class="text-gray-400 hover:text-primary transition-colors duration-300">+1 (123) 456-7890</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} OmniVerse Tech. 
          {{ currentLanguage === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.' }}
        </p>
        <div class="flex space-x-4">
          <a href="/terminos" class="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
            {{ currentLanguage === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions' }}
          </a>
          <a href="/privacidad" class="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
            {{ currentLanguage === 'es' ? 'Política de Privacidad' : 'Privacy Policy' }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Props
const props = defineProps({
  menuItems: {
    type: Array,
    required: true
  },
  socialLinks: {
    type: Array,
    required: true
  },
  currentLanguage: {
    type: String,
    default: 'es'
  }
});
</script>

