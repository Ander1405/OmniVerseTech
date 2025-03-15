<template>
  <main>
    <section class="pt-32 pb-16 bg-gradient-to-br from-white to-gray-100 dark:from-secondary dark:to-secondary-dark transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            {{ translations[currentLanguage].title }}
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            {{ translations[currentLanguage].subtitle }}
          </p>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-white dark:bg-secondary transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div v-for="(service, index) in translations[currentLanguage].services" :key="service.id" :id="service.id" class="mb-20">
            <div class="flex flex-col md:flex-row items-center" :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">
              <div class="w-full md:w-1/2 mb-8 md:mb-0" :class="{ 'md:pl-12': index % 2 === 0, 'md:pr-12': index % 2 !== 0 }">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">{{ service.title }}</h2>
                <div class="flex items-center mb-6">
                  <span class="text-2xl font-bold text-primary">{{ service.price }}</span>
                  <span class="ml-2 text-gray-500 dark:text-gray-400">{{ service.pricingNote }}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-6">{{ service.description }}</p>
                <ul class="space-y-3 mb-8">
                  <li v-for="(feature, featureIndex) in service.features" :key="featureIndex" class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                  </li>
                </ul>
                <router-link to="/contacto" class="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-300">
                  {{ translations[currentLanguage].ctaButton }}
                </router-link>
              </div>
              <div class="w-full md:w-1/2">
                <div class="relative">
                  <img :src="service.image" :alt="service.title" class="w-full h-auto rounded-lg shadow-xl" loading="lazy" width="600" height="400" />
                  <div class="absolute -bottom-4 -right-4 w-full h-full bg-primary-light rounded-lg -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-gray-50 dark:bg-secondary-dark transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            {{ translations[currentLanguage].faqTitle }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
            {{ translations[currentLanguage].faqSubtitle }}
          </p>
          
          <div class="space-y-6 text-left">
            <div v-for="(faq, index) in translations[currentLanguage].faqs" :key="index" class="bg-white dark:bg-secondary rounded-lg shadow-md p-6">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">{{ faq.question }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { inject } from 'vue';

const currentLanguage = inject('currentLanguage');

const translations = {
    es: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones digitales adaptadas a tus necesidades',
        ctaButton: 'Solicitar cotización',
        services: [
            {
                id: 'landing',
                title: 'Landing Pages',
                price: '$100',
                pricingNote: 'pago único',
                description: 'Páginas de aterrizaje optimizadas para conversión, ideales para campañas específicas o presentación de productos. Incluyen diseño atractivo, formularios de contacto y optimización para dispositivos móviles.',
                features: [
                    'Diseño personalizado y atractivo',
                    'Optimizado para dispositivos móviles',
                    'Formulario de contacto funcional',
                    'Optimización SEO básica',
                    'Carga rápida y rendimiento optimizado',
                    'Entrega en 5-7 días hábiles'
                ],
                image: '/images/landing-page-service.webp'
            },
            {
                id: 'web',
                title: 'Páginas Web Corporativas',
                price: '$300',
                pricingNote: 'pago único',
                description: 'Sitios web profesionales y responsivos para empresas que buscan establecer una presencia digital sólida. Incluyen múltiples páginas, diseño personalizado y optimización SEO.',
                features: [
                    'Hasta 5 páginas (Inicio, Servicios, Nosotros, etc.)',
                    'Diseño responsivo para todos los dispositivos',
                    'Optimización SEO completa',
                    'Integración con Google Analytics',
                    'Formulario de contacto y mapa de ubicación',
                    'Entrega en 2-3 semanas'
                ],
                image: '/images/website-service.webp'
            },
            {
                id: 'app',
                title: 'Aplicaciones Web',
                price: 'desde $700',
                pricingNote: 'según requerimientos',
                description: 'Soluciones web personalizadas con funcionalidades avanzadas para necesidades específicas de negocio. Incluyen desarrollo front-end y back-end, bases de datos y funcionalidades a medida.',
                features: [
                    'Análisis y planificación detallada',
                    'Diseño de interfaz de usuario intuitiva',
                    'Desarrollo front-end y back-end',
                    'Panel de administración personalizado',
                    'Integraciones con APIs y servicios externos',
                    'Soporte técnico post-lanzamiento',
                    'Tiempo de entrega según complejidad'
                ],
                image: '/images/webapp-service.webp'
            }
            ],
        faqTitle: 'Preguntas Frecuentes',
        faqSubtitle: 'Respuestas a las dudas más comunes sobre nuestros servicios',
        faqs: [
            {
                question: '¿Cuánto tiempo toma desarrollar un proyecto?',
                answer: 'Los tiempos de entrega varían según el tipo de proyecto. Las landing pages suelen estar listas en 5-7 días hábiles, los sitios web en 2-3 semanas, y las aplicaciones web dependen de la complejidad, generalmente entre 4-8 semanas.'
            },
            {
                question: '¿Qué incluye el mantenimiento de mi sitio web?',
                answer: 'Nuestros planes de mantenimiento incluyen actualizaciones de seguridad, copias de seguridad regulares, soporte técnico, correcciones de errores y pequeñas modificaciones de contenido. Los planes se adaptan a las necesidades específicas de cada cliente.'
            },
            {
                question: '¿Puedo actualizar mi sitio web por mi cuenta?',
                answer: 'Sí, dependiendo del tipo de proyecto, podemos implementar un sistema de gestión de contenido (CMS) que le permitirá actualizar textos, imágenes y otros contenidos sin conocimientos técnicos.'
            },
            {
                question: '¿Ofrecen servicios de hosting y dominio?',
                answer: 'Sí, podemos gestionar el hosting y dominio de su proyecto por un costo adicional. También podemos trabajar con proveedores que usted ya tenga contratados.'
            }
            ]
    },
    en: {
        title: 'Our Services',
        subtitle: 'Digital solutions tailored to your needs',
        ctaButton: 'Request a quote',
        services: [
            {
                id: 'landing',
                title: 'Landing Pages',
                price: '$100',
                pricingNote: 'one-time payment',
                description: 'Conversion-optimized landing pages, ideal for specific campaigns or product presentations. They include attractive design, contact forms, and mobile optimization.',
                features: [
                    'Custom and attractive design',
                    'Mobile device optimization',
                    'Functional contact form',
                    'Basic SEO optimization',
                    'Fast loading and optimized performance',
                    'Delivery in 5-7 business days'
                ],
                image: '/images/landing-page-service.webp'
            },
            {
                id: 'web',
                title: 'Corporate Websites',
                price: '$300',
                pricingNote: 'one-time payment',
                description: 'Professional and responsive websites for companies looking to establish a solid digital presence. They include multiple pages, custom design, and SEO optimization.',
                features: [
                    'Up to 5 pages (Home, Services, About Us, etc.)',
                    'Responsive design for all devices',
                    'Complete SEO optimization',
                    'Google Analytics integration',
                    'Contact form and location map',
                    'Delivery in 2-3 weeks'
                ],
                image: '/images/website-service.webp'
            },
            {
                id: 'app',
                title: 'Web Applications',
                price: 'from $700',
                pricingNote: 'based on requirements',
                description: 'Custom web solutions with advanced functionalities for specific business needs. They include front-end and back-end development, databases, and custom functionalities.',
                features: [
                    'Detailed analysis and planning',
                    'Intuitive user interface design',
                    'Front-end and back-end development',
                    'Custom admin panel',
                    'Integrations with APIs and external services',
                    'Post-launch technical support',
                    'Delivery time based on complexity'
                ],
                image: '/images/webapp-service.webp'
            }
            ],
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Answers to the most common questions about our services',
        faqs: [
            {
                question: 'How long does it take to develop a project?',
                answer: 'Delivery times vary depending on the type of project. Landing pages are usually ready in 5-7 business days, websites in 2-3 weeks, and web applications depend on complexity, generally between 4-8 weeks.'
            },
            {
                question: 'What does website maintenance include?',
                answer: 'Our maintenance plans include security updates, regular backups, technical support, bug fixes, and minor content modifications. Plans are adapted to the specific needs of each client.'
            },
            {
                question: 'Can I update my website myself?',
                answer: 'Yes, depending on the type of project, we can implement a content management system (CMS) that will allow you to update texts, images, and other content without technical knowledge.'
            },
            {
                question: 'Do you offer hosting and domain services?',
                answer: 'Yes, we can manage the hosting and domain of your project for an additional cost. We can also work with providers you already have contracted.'
            }
        ]
    }
};
</script>

<script>
export default {
    metaInfo() {
        return {
            title: this.currentLanguage === 'es' ? 'Servicios | OmniVerse Tech' : 'Services | OmniVerse Tech',
            meta: [
                {
                    name: 'description',
                    content: this.currentLanguage === 'es'
                        ? 'Servicios de desarrollo web: landing pages, sitios web corporativos y aplicaciones web a medida.'
                        : 'Web development services: landing pages, corporate websites, and custom web applications.'
                }
            ]
        };
    }
}
</script>

