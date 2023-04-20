import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "@/assets/css/index.css";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
import App from "./App.vue";
createApp(App).use(router).use(pinia).mount("#app");