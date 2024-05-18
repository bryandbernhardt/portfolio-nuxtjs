// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		defaults: {
			p: {
				style: 'font-size: 1.05rem; line-height: 28.05px;'
			}
		},
		theme: {
			defaultTheme: useColorMode().value
		}
	})
	app.vueApp.use(vuetify)
})
