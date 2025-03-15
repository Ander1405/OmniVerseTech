<template>
  <main>
    <HeroSection :content="translations[currentLanguage].hero" />
    <ServicesSection :content="translations[currentLanguage].services" />
    <TechnologiesSection :content="translations[currentLanguage].technologies" />
    <TestimonialsSection :content="translations[currentLanguage].testimonials" />
    <CtaSection :content="translations[currentLanguage].cta" />
  </main>
</template>

<script setup>
import { inject } from 'vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';
import TechnologiesSection from '@/components/home/TechnologiesSection.vue';
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
import CtaSection from '@/components/home/CtaSection.vue';

const currentLanguage = inject('currentLanguage');

const translations = {
    es: {
        hero: {
          title: 'Soluciones tecnológicas sin límites',
          subtitle: 'Transformamos ideas en soluciones digitales innovadoras',
          cta: 'Cotiza tu proyecto ahora'
        },
        services: {
            title: 'Nuestros Servicios',
            subtitle: 'Soluciones a medida para tus necesidades digitales',
            items: [
                {
                    id: 'webPage',
                    title: 'Páginas Web desde',
                    price: '$100',
                    description: 'Páginas individuales diseñadas para presentar información clave de manera clara y accesible.',
                    features: [
                        'Diseño genérico',
                        'Diseño responsivo',
                        'Formulario de contacto'
                    ],
                    icon: 'layout'
                },
                {
                    id: 'webSite',
                    title: 'Sitios Web desde',
                    price: '$300',
                    description: 'Conjunto de páginas interconectadas que brindan una experiencia estructurada y profesional.',
                    features: [
                        'Diseño personalizado', 'Hasta 5 páginas web',
                        'Diseño responsivo',
                        'Gestión de contenido básico',
                        'Soporte para múltiples idiomas',
                        'Certificado SSL incluido'
                    ],
                    icon: 'globe'
                },
                {
                    id: 'appsWeb',
                    title: 'Aplicaciones Web desde',
                    price: '$1,000',
                    description: 'Aplicaciones web escalables para automatizar procesos y gestionar datos en tiempo real.',
                    features: [
                        'Funcionalidades personalizadas',
                        'Panel de administración',
                        'Base de datos optimizada',
                        'Integraciones API',
                        'Notificaciones en tiempo real',
                        'Procesos en segundo plano',
                        'Diseño de interfaz personalizada',
                        'Interfaz moderna y dinámica – UI/UX',
                        'Diseño responsivo para varios dispositivos'
                    ],
                    icon: 'code'
                }
          ],
        cta: 'Ver todos los servicios'
    },
        technologies: {
            title: 'Stack tecnológico',
            subtitle: 'Herramientas de vanguardia para proyectos de calidad',
            techs: [
                { name: 'PHP', icon: '/src/icons/php_logo.svg' },
                { name: 'Laravel', icon: '/src/icons/laravel_logo.svg' },
                { name: 'Python', icon: '/src/icons/python_logo.svg' },
                { name: 'MySQL', icon: '/src/icons/mysql_logo.svg' },
                { name: 'AWS', icon: '/src/icons/aws_logo.svg' },
                { name: 'JavaScript', icon: '/src/icons/javascript_logo.svg' },
                { name: 'Vue.js', icon: '/src/icons/vue_logo.svg' },
                { name: 'React', icon: '/src/icons/react_logo.svg' },
                { name: 'Node.js', icon: '/src/icons/nodejs_logo.svg' },
                { name: 'HTML5', icon: '/src/icons/html_logo.svg' },
                { name: 'CSS3', icon: '/src/icons/css_logo.svg' },
                { name: 'Tailwind CSS', icon: '/src/icons/tailwind_logo.svg' },
            ]
        },
        testimonials: {
            title: 'Lo que dicen nuestros clientes',
            subtitle: 'Historias de éxito que nos enorgullecen',
            items: [
            {
                name: 'Carlos Rodríguez',
                company: 'TechStart Inc.',
                image: '/images/testimonial1.jpg',
                text: 'OmniVerse Tech transformó nuestra idea en una aplicación web funcional en tiempo récord. Su equipo es altamente profesional y entregó exactamente lo que necesitábamos.'
            },
            {
                name: 'María González',
                company: 'Innovate Solutions',
                image: '/images/testimonial2.jpg',
                text: 'Nuestra landing page ha incrementado nuestras conversiones en un 40%. El diseño es moderno y la experiencia de usuario es excepcional. ¡Totalmente recomendados!'
            },
            {
                name: 'Juan Pérez',
                company: 'Digital Marketing Pro',
                image: '/images/testimonial3.jpg',
                text: 'Hemos trabajado con OmniVerse Tech en múltiples proyectos y siempre entregan soluciones de alta calidad. Su atención al detalle y soporte técnico son incomparables.'
            }
          ]
        },
    cta: {
            title: '¿Listo para impulsar tu presencia digital?',
            subtitle: 'Contáctanos hoy y comencemos a trabajar en tu proyecto',
            buttonText: 'Solicitar cotización'
        }
    },
    en: {
        hero: {
            title: 'Technology Solutions Without Limits',
            subtitle: 'Transforming ideas into innovative digital solutions',
            cta: 'Get a Quote Now'
        },
        services: {
            title: 'Our Services',
            subtitle: 'Tailored solutions for your digital needs',
            items: [
                {
                    id: 'webPage',
                    title: 'Web Pages from',
                    price: '$100',
                    description: 'Single pages designed to present key information clearly and accessibly.',
                    features: [
                        'Generic design',
                        'Responsive design',
                        'Contact form'
                    ],
                    icon: 'layout'
                },
                {
                    id: 'webSite',
                    title: 'Websites from',
                    price: '$300',
                    description: 'Set of interconnected pages that provide a structured and professional experience.',
                    features: [
                        'Custom design',
                        'Up to 5 web pages',
                        'Responsive design',
                        'Basic content management',
                        'Multi-language support',
                        'SSL certificate included'
                    ],
                    icon: 'globe'
                },
                {
                    id: 'appsWeb',
                    title: 'Web Applications from',
                    price: '$1,000',
                    description: 'Scalable web applications to automate processes and manage data in real-time.',
                    features: [
                        'Custom functionalities',
                        'Admin panel',
                        'Optimized database',
                        'API integrations',
                        'Real-time notifications',
                        'Background processes',
                        'Custom interface design',
                        'Modern and dynamic interface – UI/UX',
                        'Responsive design for multiple devices'
                    ],
                    icon: 'code'
                }
                ],
            cta: 'View all services'
        },
        technologies: {
            title: 'Technologies We Us',
            subtitle: 'Cutting-edge tools for quality projects',
            techs: [
                { name: 'PHP', icon: '/src/icons/php_logo.svg' },
                { name: 'Laravel', icon: '/src/icons/laravel_logo.svg' },
                { name: 'Python', icon: '/src/icons/python_logo.svg' },
                { name: 'MySQL', icon: '/src/icons/mysql_logo.svg' },
                { name: 'AWS', icon: '/src/icons/aws_logo.svg' },
                { name: 'JavaScript', icon: '/src/icons/javascript_logo.svg' },
                { name: 'Vue.js', icon: '/src/icons/vue_logo.svg' },
                { name: 'React', icon: '/src/icons/react_logo.svg' },
                { name: 'Node.js', icon: '/src/icons/nodejs_logo.svg' },
                { name: 'HTML5', icon: '/src/icons/html_logo.svg' },
                { name: 'CSS3', icon: '/src/icons/css_logo.svg' },
                { name: 'Tailwind CSS', icon: '/src/icons/tailwind_logo.svg' },
            ]
        },
        testimonials: {
            title: 'What Our Clients Say',
            subtitle: 'Success stories that make us proud',
            items: [
                {
                    name: 'Carlos Rodriguez',
                    company: 'TechStart Inc.',
                    image: '/images/testimonial1.jpg',
                    text: 'OmniVerse Tech transformed our idea into a functional web application in record time. Their team is highly professional and delivered exactly what we needed.'
                },
                {
                    name: 'Maria Gonzalez',
                    company: 'Innovate Solutions',
                    image: '/images/testimonial2.jpg',
                    text: 'Our landing page has increased our conversions by 40%. The design is modern and the user experience is exceptional. Highly recommended!'
                },
                {
                    name: 'Juan Perez',
                    company: 'Digital Marketing Pro',
                    image: '/images/testimonial3.jpg',
                    text: 'We have worked with OmniVerse Tech on multiple projects and they always deliver high-quality solutions. Their attention to detail and technical support are unmatched.'
                }
            ]
        },
        cta: {
          title: 'Ready to boost your digital presence?',
          subtitle: 'Contact us today and let\'s start working on your project',
          buttonText: 'Request a quote'
        }
    }
};
</script>

<script>
export default {
    metaInfo() {
        return {
            title: this.currentLanguage === 'es' ? 'OmniVerse Tech - Soluciones Tecnológicas' : 'OmniVerse Tech - Technology Solutions',
            meta: [
                {
                    name: 'description',
                    content: this.currentLanguage === 'es'
                        ? 'Soluciones tecnológicas sin límites. Desarrollo de landing pages, sitios web y aplicaciones web a medida.'
                        : 'Technology solutions without limits. Development of landing pages, websites and custom web applications.'
                },
                {
                    property: 'og:title',
                    content: this.currentLanguage === 'es' ? 'OmniVerse Tech - Soluciones Tecnológicas' : 'OmniVerse Tech - Technology Solutions'
                },
                {
                    property: 'og:description',
                    content: this.currentLanguage === 'es'
                        ? 'Soluciones tecnológicas sin límites. Desarrollo de landing pages, sitios web y aplicaciones web a medida.'
                        : 'Technology solutions without limits. Development of landing pages, websites and custom web applications.'
                },
                {
                    property: 'og:image',
                    content: '/images/og-image.jpg'
                },
                {
                    property: 'og:url',
                    content: 'https://omniversetech.com'
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                }
            ]
        };
    }
}
</script>

