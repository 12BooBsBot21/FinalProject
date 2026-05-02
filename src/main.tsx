import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css'

import { RouterProvider } from 'react-router-dom'
import { routes } from './app/router/routes.tsx'
import { Provider } from 'react-redux'
import { setUpStore, theme } from '@/app'
import { MantineProvider } from '@mantine/core'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Provider store={setUpStore()}>
        <RouterProvider router={routes} />
      </Provider>
    </MantineProvider>
  </StrictMode>,
)
