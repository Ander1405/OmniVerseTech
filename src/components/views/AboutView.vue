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
          <div class="flex flex-row w-full items-center mx-auto justify-between max-w-6xl">
            <div class="w-full flex flex-col md:flex-row justify-between gap-8 mb-10 md:mb-0 md:pr-10">
              <div 
                class="bg-gray-50 dark:bg-secondary-dark p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl"
                v-intersection-observer="{ callback: onIntersect, options: { threshold: 0.2 } }"
                :class="{ 'animate-slide-in-left': isVisible }"
              >
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">{{ translations[currentLanguage].mission.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ translations[currentLanguage].mission.text }}
                </p>
              </div>
              
              <div 
                class="bg-gray-50 dark:bg-secondary-dark p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl"
                v-intersection-observer="{ callback: onIntersect2, options: { threshold: 0.2 } }"
                :class="{ 'animate-slide-in-left': isVisible2 }"
              >
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">{{ translations[currentLanguage].vision.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ translations[currentLanguage].vision.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50 dark:bg-secondary-dark transition-colors duration-300">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {{ translations[currentLanguage].team.title }}
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              {{ translations[currentLanguage].team.subtitle }}
            </p>
            <div class="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <div class="max-w-4xl mx-auto text-center mb-16">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ translations[currentLanguage].team.description }}
            </p>
          </div>

          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div
                v-for="(member, index) in translations[currentLanguage].team.members.slice(0, 3)"
                :key="index"
                class="flex flex-col justify-between bg-white dark:bg-secondary rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                v-intersection-observer="{ callback: (entries) => onIntersectTeam(entries, index), options: { threshold: 0.2 } }"
              >
                <div>
                  <div class="relative overflow-hidden h-64">
                    <img
                      :src="member.image"
                      :alt="member.name"
                      class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />

                  </div>

                  <div class="m-6">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-1">{{ member.name }}</h3>
                    <p class="text-primary font-medium mb-3">{{ member.position }}</p>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ member.bio }}</p>
                  </div>
                </div>
                  <div class="flex px-6 pb-6 space-x-3">
                    <a v-for="social in member.social" :key="social.name" :href="social.url" target="_blank" class="text-gray-500 hover:text-primary transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <template v-if="social.name === 'linkedin'">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </template>
                        <template v-else-if="social.name === 'github'">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </template>
                      </svg>
                    </a>
                  </div>
              </div>
            </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-2/3 mx-auto">
              <div
                v-for="(member, index) in translations[currentLanguage].team.members.slice(3)"
                :key="index + 3"
                class="flex flex-col justify-between bg-white dark:bg-secondary rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                v-intersection-observer="{ callback: (entries) => onIntersectTeam(entries, index + 3), options: { threshold: 0.2 } }"
              >
                <div>
                  <div class="relative overflow-hidden h-64">
                    <img
                        :src="member.image"
                        :alt="member.name"
                        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                    />

                  </div>

                  <div class="m-6">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-1">{{ member.name }}</h3>
                    <p class="text-primary font-medium mb-3">{{ member.position }}</p>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ member.bio }}</p>
                  </div>
                </div>
                <div class="flex px-6 pb-6 space-x-3">
                  <a v-for="social in member.social" :key="social.name" :href="social.url" target="_blank" class="text-gray-500 hover:text-primary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <template v-if="social.name === 'linkedin'">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </template>
                      <template v-else-if="social.name === 'github'">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </template>
                    </svg>
                  </a>
                </div>
              </div>
              </div>
            </div>
        </div>
      </section>

      <section class="py-16 bg-white dark:bg-secondary transition-colors duration-300">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {{ translations[currentLanguage].values.title }}
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              {{ translations[currentLanguage].values.subtitle }}
            </p>
            <div class="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div 
              v-for="(value, index) in translations[currentLanguage].values.items" 
              :key="index"
              class="bg-gray-50 dark:bg-secondary-dark rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              v-intersection-observer="{ callback: (entries) => onIntersectValues(entries, index), options: { threshold: 0.2 } }"
              :class="{ 'animate-fade-in': visibleValues[index] }"
              :style="{ 'animation-delay': `${index * 0.15}s` }"
            >
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <template v-if="value.icon === 'star'">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </template>
                  <template v-else-if="value.icon === 'heart'">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </template>
                  <template v-else-if="value.icon === 'users'">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </template>
                  <template v-else-if="value.icon === 'shield'">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </template>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">{{ value.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref, inject } from 'vue';
  
  // Get current language from parent
  const currentLanguage = inject('currentLanguage');
  
  // State for animations
  const isVisible = ref(false);
  const isVisible2 = ref(false);
  const isVisible3 = ref(false);
  const visibleTeam = ref({});
  const visibleValues = ref({});
  
  // Methods
  const onIntersect = (entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  };
  
  const onIntersect2 = (entries) => {
    if (entries[0].isIntersecting) {
      isVisible2.value = true;
    }
  };
  
  const onIntersect3 = (entries) => {
    if (entries[0].isIntersecting) {
      isVisible3.value = true;
    }
  };
  
  const onIntersectTeam = (entries, index) => {
    if (entries[0].isIntersecting) {
      visibleTeam.value[index] = true;
    }
  };
  
  const onIntersectValues = (entries, index) => {
    if (entries[0].isIntersecting) {
      visibleValues.value[index] = true;
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
  
  // Translations
  const translations = {
    es: {
      title: 'Sobre Nosotros',
      subtitle: 'Conoce quiénes somos y nuestra filosofía',
      mission: {
        title: 'Nuestra Misión',
        text: 'En Dexel, nuestra misión es impulsar la transformación digital de empresas y emprendedores, ofreciendo soluciones tecnológicas de vanguardia que maximicen su potencial en el mundo digital. Nos comprometemos a entregar productos de alta calidad, con un enfoque centrado en el usuario y resultados medibles.'
      },
      vision: {
        title: 'Nuestra Visión',
        text: 'Ser una empresa líder en el desarrollo de software y soluciones digitales, reconocida por nuestra excelencia, innovación y compromiso con el éxito de nuestros clientes. Aspiramos a transformar la manera en que las empresas interactúan con la tecnología, creando experiencias digitales que impulsen su crecimiento y competitividad.'
      },
      team: {
        title: 'Nuestro Equipo',
        subtitle: 'Profesionales apasionados por la tecnología',
        description: 'Nuestro equipo está formado por desarrolladores Full Stack altamente capacitados, con experiencia en empresas de primer nivel. Nos destacamos por elaborar soluciones óptimas y competentes en el mercado, combinando un profundo análisis técnico con una sólida comprensión del negocio. Cada miembro de nuestro equipo aporta no solo habilidades técnicas excepcionales, sino también una verdadera pasión por la tecnología y la innovación. Nos enfocamos en potenciar tus proyectos e ideas, transformándolos en soluciones digitales robustas y escalables. La excelencia técnica y el compromiso con el éxito de nuestros clientes son los pilares que nos impulsan cada día.',
        members: [
          {
            name: 'Valeria Granada Rodas',
            position: 'Desarrollador Senior',
            bio: 'Con más de 5 años de experiencia en desarrollo web. Ingeniera de sistemas de la Universidad de Antioquia.',
            image: '/images/photos/vale.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/vale0722/' },
              { name: 'github', url: 'https://github.com/vale0722' }
            ]
          },
          {
            name: 'Alejandro Castrillon Ciro',
            position: 'Desarrollador Middle',
            bio: 'Con más de 3 años de experiencia en desarrollo web. Ingeniero de sistemas graduado de la Universidad de Antioquia.',
            image: '/images/photos/ciro.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/alejandro-castrillon-ciro-9539491ba/' },
              { name: 'github', url: 'https://github.com/alejociro' }
            ]
          },
          {
            name: 'Alejandro Cristancho',
            position: 'Desarrollador Middle',
            bio: 'Ingeniero de sistemas de la Universidad de Antioquia, con mas de 2 años de experiencia.',
            image: '/images/photos/cristancho.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/alejandrocristm/' },
              { name: 'github', url: 'https://github.com/AlejandroCristM' }
            ]
          },
          {
            name: 'Ana Maria Granada Rodas',
            position: 'Desarrollador Middle',
            bio: 'Estudiante de ingeniería de sistemas de la Universidad de Antioquia, con mas de 3 años de experiencia.',
            image: '/images/photos/ana.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/ana-maria-granada-rodas-945712244/' },
              { name: 'github', url: 'https://github.com/ana2002granada' }
            ]
          },
          {
            name: 'Anderson Cardona Ortiz',
            position: 'Desarrollador Middle',
            bio: 'Estudiante de ingeniería de sistemas del ITM, con mas de 3 años de experiencia.',
            image: '/images/photos/anderson.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/anderson-cardona-ortiz-773959224/' },
              { name: 'github', url: 'https://github.com/Ander1405' }
            ]
          }
        ]
      },
      values: {
        title: 'Nuestros Valores',
        subtitle: 'Principios que guían nuestro trabajo diario',
        items: [
          {
            title: 'Excelencia',
            description: 'Nos esforzamos por superar las expectativas en cada proyecto, con atención meticulosa a los detalles y un compromiso con la calidad.',
            icon: 'star'
          },
          {
            title: 'Innovación',
            description: 'Exploramos constantemente nuevas tecnologías y enfoques para ofrecer soluciones creativas y de vanguardia.',
            icon: 'heart'
          },
          {
            title: 'Colaboración',
            description: 'Trabajamos estrechamente con nuestros clientes, construyendo relaciones de confianza y comunicación transparente.',
            icon: 'users'
          },
          {
            title: 'Integridad',
            description: 'Actuamos con honestidad y ética en todas nuestras interacciones, manteniendo los más altos estándares profesionales.',
            icon: 'shield'
          }
        ]
      }
    },
    en: {
      title: 'About Us',
      subtitle: 'Learn who we are and our philosophy',
      mission: {
        title: 'Our Mission',
        text: 'At Dexel, our mission is to drive the digital transformation of businesses and entrepreneurs, offering cutting-edge technological solutions that maximize their potential in the digital world. We are committed to delivering high-quality products, with a user-centered approach and measurable results.'
      },
      vision: {
        title: 'Our Vision',
        text: 'To be a leading company in software development and digital solutions, recognized for our excellence, innovation, and commitment to our clients\' success. We aspire to transform the way businesses interact with technology, creating digital experiences that drive their growth and competitiveness.'
      },
      team: {
        title: 'Our Team',
        subtitle: 'Professionals passionate about technology',
        description: 'Our team consists of highly skilled Full Stack developers with experience in leading companies. We stand out by delivering optimal and competent solutions in the market, combining deep technical analysis with a solid understanding of the business. Each member of our team not only brings exceptional technical skills but also a true passion for technology and innovation. We focus on turning your projects and ideas into robust and scalable digital solutions. Technical excellence and commitment to our clients\' success are the pillars that drive us every day.',
        members: [
          {
            name: 'Valeria Granada Rodas',
            position: 'Desarrollador Senior',
            bio: 'With over 5 years of experience in web development. He holds a degree in website engineering from the Universidad de Antioquia.',
            image: '/images/photos/vale.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/vale0722/' },
              { name: 'github', url: 'https://github.com/vale0722' }
            ]
          },
          {
            name: 'Alejandro Castrillon Ciro',
            position: 'Desarrollador Middle',
            bio: 'With over three years of experience in web development. Systems engineer graduated from the Universidad de Antioquia.',
            image: '/images/photos/ciro.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/alejandro-castrillon-ciro-9539491ba/' },
              { name: 'github', url: 'https://github.com/alejociro' }
            ]
          },
          {
            name: 'Alejandro Cristancho',
            position: 'Desarrollador Middle',
            bio: 'Systems engineer from the Universidad de Antioquia, with more than 2 years of experience..',
            image: '/images/photos/cristancho.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/alejandrocristm/' },
              { name: 'github', url: 'https://github.com/AlejandroCristM' }
            ]
          },
          {
            name: 'Ana Maria Granada Rodas',
            position: 'Desarrollador Middle',
            bio: 'Systems engineering student at the Universidad de Antioquia, with more than 3 years of experience.',
            image: '/images/photos/ana.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/ana-maria-granada-rodas-945712244/' },
              { name: 'github', url: 'https://github.com/ana2002granada' }
            ]
          },
          {
            name: 'Anderson Cardona Ortiz',
            position: 'Desarrollador Middle',
            bio: 'Systems engineering student at ITM, with more than 3 years of experience.',
            image: '/images/photos/anderson.jpeg',
            social: [
              { name: 'linkedin', url: 'https://www.linkedin.com/in/anderson-cardona-ortiz-773959224/' },
              { name: 'github', url: 'https://github.com/Ander1405' }
            ]
          }
        ]
      },
      values: {
        title: 'Our Values',
        subtitle: 'Principles that guide our daily work',
        items: [
          {
            title: 'Excellence',
            description: 'We strive to exceed expectations in every project, with meticulous attention to detail and a commitment to quality.',
            icon: 'star'
          },
          {
            title: 'Innovation',
            description: 'We constantly explore new technologies and approaches to offer creative and cutting-edge solutions.',
            icon: 'heart'
          },
          {
            title: 'Collaboration',
            description: 'We work closely with our clients, building relationships of trust and transparent communication.',
            icon: 'users'
          },
          {
            title: 'Integrity',
            description: 'We act with honesty and ethics in all our interactions, maintaining the highest professional standards.',
            icon: 'shield'
          }
        ]
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
  
  