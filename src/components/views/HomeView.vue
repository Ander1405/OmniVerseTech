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
import { computed, inject } from 'vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';
import TechnologiesSection from '@/components/home/TechnologiesSection.vue';
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
import CtaSection from '@/components/home/CtaSection.vue';

// Get current language from parent
const currentLanguage = inject('currentLanguage');

// Translations
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
          id: 'landing',
          title: 'Landing Pages',
          price: '$100',
          description: 'Páginas de aterrizaje optimizadas para conversión',
          features: ['Diseño personalizado', 'Optimizado para móviles', 'Formulario de contacto'],
          icon: 'layout'
        },
        {
          id: 'web',
          title: 'Páginas Web',
          price: '$300',
          description: 'Sitios web profesionales y responsivos',
          features: ['Hasta 5 páginas', 'SEO básico', 'Responsive design'],
          icon: 'globe'
        },
        {
          id: 'app',
          title: 'Aplicaciones Web',
          price: 'desde $700',
          description: 'Soluciones web personalizadas y escalables',
          features: ['Funcionalidades personalizadas', 'Panel de administración', 'Integraciones API'],
          icon: 'code'
        }
      ],
      cta: 'Ver todos los servicios'
    },
    technologies: {
      title: 'Tecnologías que usamos',
      subtitle: 'Herramientas de vanguardia para proyectos de calidad',
      techs: [
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'CSS3', icon: '/icons/css3.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'Vue.js', icon: '/icons/vue.svg' },
        { name: 'React', icon: '/icons/react.svg' },
        { name: 'Node.js', icon: '/icons/nodejs.svg' },
        { name: 'PHP', icon: '/icons/php.svg' },
        { name: 'Laravel', icon: '/icons'  },
        { name: 'PHP', icon: '/icons/php.svg' },
        { name: 'Laravel', icon: '/icons/laravel.svg' },
        { name: 'MySQL', icon: '/icons/mysql.svg' },
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
        { name: 'AWS', icon: '/icons/aws.svg' },
        { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
        { name: 'Git', icon: '/icons/git.svg' }
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
          id: 'landing',
          title: 'Landing Pages',
          price: '$100',
          description: 'Conversion-optimized landing pages',
          features: ['Custom design', 'Mobile optimized', 'Contact form'],
          icon: 'layout'
        },
        {
          id: 'web',
          title: 'Websites',
          price: '$300',
          description: 'Professional and responsive websites',
          features: ['Up to 5 pages', 'Basic SEO', 'Responsive design'],
          icon: 'globe'
        },
        {
          id: 'app',
          title: 'Web Applications',
          price: 'from $700',
          description: 'Custom and scalable web solutions',
          features: ['Custom functionality', 'Admin panel', 'API integrations'],
          icon: 'code'
        }
      ],
      cta: 'View all services'
    },
    technologies: {
      title: 'Technologies We Use',
      subtitle: 'Cutting-edge tools for quality projects',
      techs: [
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'CSS3', icon: '/icons/css3.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'Vue.js', icon: '/icons/vue.svg' },
        { name: 'React', icon: '/icons/react.svg' },
        { name: 'Node.js', icon: '/icons/nodejs.svg' },
        { name: 'PHP', icon: '/icons/php.svg' },
        { name: 'Laravel', icon: '/icons/laravel.svg' },
        { name: 'MySQL', icon: '/icons/mysql.svg' },
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
        { name: 'AWS', icon: '/icons/aws.svg' },
        { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
        { name: 'Git', icon: '/icons/git.svg' }
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
// For SEO meta tags
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

