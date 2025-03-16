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
                    <div v-for="(service, index) in translations[currentLanguage].services" :key="service.id" :id="service.id" class="mb-20">
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
                                    <div class="absolute -bottom-4 -right-4 w-full h-full bg-primary-light rounded-lg -z-10"></div>
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

const toggleFaq = (index) => {
    if (openFaqs.value.has(index)) {
        openFaqs.value.delete(index);
    } else {
        openFaqs.value.add(index);
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
                price: '$100',
                pricingNote: 'Pago único / Tiempo de entrega de 5 a 7 días habíles',
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
                price: '$300',
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
                price: 'desde $1,000',
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
                image: '/src/images/services/webaplications.jpg'
            }
            ],
        faqTitle: 'Preguntas Frecuentes',
        faqSubtitle: 'Respuestas a las dudas más comunes sobre nuestros servicios',
        faqs: [
            {
                question: '¿Cuánto tiempo toma desarrollar un proyecto?',
                answer: 'Los tiempos de entrega varían según el tipo de proyecto. Las landing pages suelen estar listas en 5-7 días hábiles, los sitios web en 2-3 semanas, y las aplicaciones web dependen de la complejidad, generalmente entre 4-8 semanas.',
                isOpen: false
            },
            {
                question: '¿Qué incluye el mantenimiento de mi sitio web?',
                answer: 'Nuestros planes de mantenimiento incluyen actualizaciones de seguridad, copias de seguridad regulares, soporte técnico, correcciones de errores y pequeñas modificaciones de contenido. Los planes se adaptan a las necesidades específicas de cada cliente.',
                isOpen: false
            },
            {
                question: '¿Puedo actualizar mi sitio web por mi cuenta?',
                answer: 'Sí, dependiendo del tipo de proyecto, podemos implementar un sistema de gestión de contenido (CMS) que le permitirá actualizar textos, imágenes y otros contenidos sin conocimientos técnicos.',
                isOpen: false
            },
            {
                question: '¿Ofrecen servicios de hosting y dominio?',
                answer: 'Sí, podemos gestionar el hosting y dominio de su proyecto por un costo adicional. También podemos trabajar con proveedores que usted ya tenga contratados.',
                isOpen: false
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
                image: '/src/images/services/webpage-cover.png'
            },
            {
                id: 'sitio-web',
                title: 'Websites',
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
                image: '/src/images/services/website.jpg'
            },
            {
                id: 'aplicacion-web',
                title: 'Web Applications',
                price: 'from $1,000',
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
                image: '/src/images/services/webaplications.jpg'
            }
            ],
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Answers to the most common questions about our services',
        faqs: [
            {
                question: 'How long does it take to develop a project?',
                answer: 'Delivery times vary depending on the type of project. Landing pages are usually ready in 5-7 business days, websites in 2-3 weeks, and web applications depend on complexity, generally between 4-8 weeks.',
                isOpen: false
            },
            {
                question: 'What does website maintenance include?',
                answer: 'Our maintenance plans include security updates, regular backups, technical support, bug fixes, and minor content modifications. Plans are adapted to the specific needs of each client.',
                isOpen: false
            },
            {
                question: 'Can I update my website myself?',
                answer: 'Yes, depending on the type of project, we can implement a content management system (CMS) that will allow you to update texts, images, and other content without technical knowledge.',
                isOpen: false
            },
            {
                question: 'Do you offer hosting and domain services?',
                answer: 'Yes, we can manage the hosting and domain of your project for an additional cost. We can also work with providers you already have contracted.',
                isOpen: false
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

