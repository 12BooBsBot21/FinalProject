import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/index.css'

import { RouterProvider } from 'react-router-dom'
import { routes } from './app/router/routes.tsx'
import { Provider } from 'react-redux'
import { setUpStore } from './app/store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={setUpStore()}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
)
