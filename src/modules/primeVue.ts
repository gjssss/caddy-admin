import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
}
