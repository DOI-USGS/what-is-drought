import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueUswds from "vue-uswds"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// arrow icons
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// social icons
import { faTwitterSquare, faFacebookSquare, faGithub, faFlickr, faYoutubeSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitterSquare, faFacebookSquare, faGithub, faFlickr, faYoutubeSquare, faInstagram, faArrowLeft, faArrowRight);

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(VueUswds)
app.use(router)
app.component("FontAwesomeIcon", FontAwesomeIcon)

app.mount('#app')
