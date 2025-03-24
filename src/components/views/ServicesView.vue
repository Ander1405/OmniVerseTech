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
                <div class="max-w-full mx-auto">
                    <div v-for="(service, index) in translations[currentLanguage].services" 
                         :key="service.id" 
                         :id="service.id" 
                         class="mb-20 initially-hidden"
                         v-intersection-observer="{ callback: (entries) => onIntersect(entries, index), options: { threshold: 0.1, rootMargin: '50px' } }"
                         :class="{ 'animate-slide-in': visibleServices[index] }"
                         :style="{ 'animation-delay': `${index * 0.3}s` }">
                        <div class="flex flex-col md:flex-row items-start gap-8" :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">
                            <div class="w-full md:w-1/2 mb-8 md:mb-0 self-stretch flex flex-col justify-center" :class="{ 'md:pl-12': index % 2 === 0, 'md:pr-12': index % 2 !== 0 }">
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
                                <div class="hidden md:block w-full">
                                    <router-link :to="{ path: '/contacto', query: { service: service.id }}" class="block w-full text-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-colors duration-300">
                                        {{ translations[currentLanguage].ctaButton }}
                                    </router-link>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 self-stretch">
                                <div class="relative w-full h-full">
                                    <img :src="service.image" :alt="service.title" class="w-full h-full object-cover rounded-xl shadow-xl" loading="lazy" />
                                </div>
                            </div>
                            <div class="md:hidden w-full">
                                <router-link :to="{ path: '/contacto', query: { service: service.id }}" class="block text-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-colors duration-300">
                                    {{ translations[currentLanguage].ctaButton }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-10 bg-gray-50 dark:bg-secondary-dark transition-colors duration-300">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                        {{ translations[currentLanguage].faqTitle }}
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        {{ translations[currentLanguage].faqSubtitle }}
                    </p>

                    <div class="space-y-6 text-left">
                        <div v-for="(faq, index) in translations[currentLanguage].faqs" 
                             :key="index" 
                             class="bg-white dark:bg-secondary rounded-xl shadow-md overflow-hidden">
                            <button 
                                @click="toggleFaq(index)" 
                                class="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-secondary-dark transition-colors duration-300">
                                <h3 class="text-xl font-semibold text-gray-800 dark:text-white">{{ faq.question }}</h3>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    class="h-6 w-6 transform transition-transform duration-300" 
                                    :class="{ 'rotate-180': openFaqs.has(index) }"
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div 
                                v-show="openFaqs.has(index)" 
                                class="px-6 pb-6">
                                <p class="text-gray-600 dark:text-gray-300">{{ faq.answer }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { inject, ref } from 'vue';

const currentLanguage = inject('currentLanguage');
const openFaqs = ref(new Set());
const visibleServices = ref({});

const toggleFaq = (index) => {
    if (openFaqs.value.has(index)) {
        openFaqs.value.delete(index);
    } else {
        openFaqs.value.add(index);
    }
};

const onIntersect = (entries, index) => {
    if (entries[0].isIntersecting) {
        visibleServices.value[index] = true;
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

const translations = {
    es: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones digitales adaptadas a tus necesidades',
        ctaButton: 'Solicitar cotización',
        services: [
            {
                id: 'pagina-web',
                title: 'Páginas web',
                price: 'Desde $100',
                pricingNote: 'Pago único / Tiempo de entrega de 5 a 7 días hábiles',
                description: 'Páginas individuales diseñadas para presentar información clave de manera clara, accesible y visualmente atractiva. Optimizadas para captar la atención del usuario, mejorar la experiencia de navegación y facilitar la comprensión del contenido de forma rápida y efectiva.',
                features: [
                    'Diseño genérico',
                    'Diseño responsivo',
                    'Formulario de contacto'
                ],
                image: '/src/images/services/webpage-cover.png'
            },
            {
                id: 'sitio-web',
                title: 'Sitios web',
                price: 'Desde $300',
                pricingNote: 'Según requerimientos / Tiempo de entrega de 2 a 4 semanas',
                description: 'Sitios web profesionales y responsivos diseñados para empresas que buscan establecer una presencia digital sólida y atractiva. Incluyen múltiples páginas con diseño personalizado, optimización SEO para mejorar la visibilidad en buscadores y una estructura adaptable que garantiza una experiencia óptima en cualquier dispositivo.',
                features: [
                    'Diseño personalizado',
                    'Hasta 5 páginas web',
                    'Diseño responsivo',
                    'Gestión de contenido básico',
                    'Soporte para múltiples idiomas',
                    'Certificado SSL incluido'
                ],
                image: '/src/images/services/website.jpg'
            },
            {
                id: 'aplicacion-web',
                title: 'Aplicaciones Web',
                price: 'Desde $1,000',
                pricingNote: 'Según requerimientos',
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
                image: '/src/images/services/web-applications.png'
            },
            {
                id: 'generalServices',
                title: 'Servicios Generales',
                price: '$ Variado',
                pricingNote: 'Según requerimientos',
                description: 'Soluciones web personalizadas con funcionalidades avanzadas para necesidades específicas de negocio. Estos incluyen integración de pasarelas de pago, consultoría de proyectos y desarrollos técnicos a medida.',
                features: [
                    'Análisis y planificación detallada',
                    'Integración con pasarelas de pago',
                    'Consultoría técnica para proyectos web',
                    'Desarrollo front-end y back-end',
                    'Panel de administración personalizado',
                    'Integraciones con APIs y servicios externos',
                    'Soporte técnico post-lanzamiento',
                ],
                image: '/src/images/services/general-services.jpg'
            }

        ],
        faqTitle: 'Preguntas Frecuentes',
        faqSubtitle: 'Respuestas a las dudas más comunes sobre nuestros servicios',
        faqs: [
            {
                question: '¿Cuánto tiempo toma desarrollar un proyecto?',
                answer: 'Los tiempos de entrega varían según el tipo de proyecto. Las páginas web suelen estar listas en 5-7 días hábiles, los sitios web en 2-4 semanas, y las aplicaciones web dependen de la complejidad, generalmente entre 4-8 semanas.'
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
                id: 'pagina-web',
                title: 'Web Pages',
                price: 'From $100',
                pricingNote: 'One-time payment / Delivery time: 5 to 7 business days',
                description: 'Individual web pages designed to present key information in a clear, accessible, and visually attractive way. Optimized to capture user attention, improve navigation experience, and facilitate quick and effective content comprehension.',
                features: [
                    'Generic design',
                    'Responsive design',
                    'Contact form'
                ],
                image: '/src/images/services/webpage-cover.png'
            },
            {
                id: 'sitio-web',
                title: 'Websites',
                price: 'From $300',
                pricingNote: 'Based on requirements / Delivery time: 2 to 4 weeks',
                description: 'Professional and responsive websites designed for businesses looking to establish a solid and attractive digital presence. They include multiple pages with custom design, SEO optimization to improve search visibility, and an adaptable structure that ensures an optimal experience on any device.',
                features: [
                    'Custom design',
                    'Up to 5 web pages',
                    'Responsive design',
                    'Basic content management',
                    'Support for multiple languages',
                    'SSL certificate included'
                ],
                image: '/src/images/services/website.jpg'
            },
            {
                id: 'aplicacion-web',
                title: 'Web Applications',
                price: 'From $1,000',
                pricingNote: 'Based on requirements',
                description: 'Custom web solutions with advanced functionalities for specific business needs. They include front-end and back-end development, databases, and tailored functionalities.',
                features: [
                    'Detailed analysis and planning',
                    'Intuitive user interface design',
                    'Front-end and back-end development',
                    'Custom admin panel',
                    'Integrations with APIs and external services',
                    'Post-launch technical support',
                    'Delivery time based on complexity'
                ],
                image: '/src/images/services/webaplications.jpg'
            },
            {
                id: 'generalServices',
                title: 'General Services',
                price: '$ Pricing',
                pricingNote: 'Based on requirements',
                description: 'Custom web solutions with advanced functionalities for specific business needs. These include payment gateway integrations, project consulting, and tailored technical implementations.',
                features: [
                    'Detailed analysis and planning',
                    'Integration with payment gateways',
                    'Technical consulting for web projects',
                    'Front-end and back-end development',
                    'Custom admin panel',
                    'API and external service integrations',
                    'Post-launch technical support',
                    'Delivery time based on complexity'
                ],
                image: '/src/images/services/general-services.jpg'
            }

        ],
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Answers to the most common questions about our services',
        faqs: [
            {
                question: 'How long does it take to develop a project?',
                answer: 'Delivery times vary depending on the type of project. Web pages are usually ready in 5-7 business days, websites in 2-4 weeks, and web applications depend on complexity, generally between 4-8 weeks.'
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
};</script>

<script>
export default {
    metaInfo() {
        return {
            title: this.currentLanguage === 'es' ? 'Servicios | Dexel' : 'Services | Dexel',
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

<style scoped>
.initially-hidden {
    opacity: 0;
    transform: translateY(30px);
}

.animate-slide-in {
    animation: slideIn 0.6s ease-out forwards;
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

