import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"

// Create Vue app
const app = createApp(App)

// Use router
app.use(router)

// Provide global properties
app.provide("currentLanguage", localStorage.getItem("language") || "es")

// Mount app
app.mount("#app")

