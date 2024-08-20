import { definePreset, palette } from '@primevue/themes'

// import Aura from '@primevue/themes/aura'
// import Nora from '@primevue/themes/nora'
import Lara from '@primevue/themes/lara'

const primaryColor = palette('#3883ce')

export default definePreset(Lara, {
  semantic: {
    primary: {
      50: primaryColor['50'],
      100: primaryColor['100'],
      200: primaryColor['200'],
      300: primaryColor['300'],
      400: primaryColor['400'],
      500: primaryColor['500'],
      600: primaryColor['600'],
      700: primaryColor['700'],
      800: primaryColor['800'],
      900: primaryColor['900'],
      950: primaryColor['950'],
    },
  },
  components: {
    panelmenu: {
      panel: {
        border: {
          width: '0',
        },
        first: {
          border: {
            width: '0',
          },
        },
        last: {
          border: {
            width: '0',
          },
        },
      },
    },
  },
})
