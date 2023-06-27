import { defineNuxtModule, installModule } from '@nuxt/kit'

export default defineNuxtModule({
    async setup () {
        installModule('@nuxtjs/robots')
    }
})
