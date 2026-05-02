import { createTheme } from '@mantine/core'

export const theme = createTheme({
  primaryColor: 'brand',
  defaultRadius: 'md',

  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',

  headings: {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontWeight: '700',
  },

  colors: {
    brand: [
      '#eef4ff',
      '#dce8ff',
      '#b9d0ff',
      '#8fb3ff',
      '#6392f2',
      '#3f73dc',
      '#1d4ed8',
      '#193fae',
      '#153587',
      '#10265f',
    ],
  },

  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        shadow: 'sm',
        withBorder: true,
      },
    },
  },
})
