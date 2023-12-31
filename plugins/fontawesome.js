import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faBook, faClockRotateLeft, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faHome, faBook, faClockRotateLeft, faGithubSquare, faLinkedin, faInstagramSquare, faTrophy)

// Register the component globally
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})