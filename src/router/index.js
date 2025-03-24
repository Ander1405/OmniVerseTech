import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../components/views/HomeView.vue"
import ServicesView from "../components/views/ServicesView.vue"
import AboutView from "../components/views/AboutView.vue"
import ContactView from "../components/views/ContactView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Dexel - Inicio",
    },
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
    meta: {
      title: "Dexel - Servicios",
    },
  },
   {
  path: "/about",
    name: "about",
    component: AboutView,
    meta: {
     title: "Dexel - Nosotros",
  },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Dexel - Contacto",
    },
  },
  // Catch all route for 404
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "not-found",
  //   component: () => import("@/views/NotFoundView.vue"),
  //   meta: {
  //     title: "OmniVerse Tech - Página no encontrada",
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If the user is navigating to a hash, scroll to it
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }

    // If the user is using the back/forward buttons, restore position
    if (savedPosition) {
      return savedPosition
    }

    // Otherwise, scroll to top
    return { top: 0, behavior: "smooth" }
  },
})

// Update document title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Dexel"
  next()
})

export default router

