import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/widgets/layout'
import { CharacterPage } from '@/pages'
import { FavoritePage } from '@/pages'
import { CharacterDetailsPage } from '@/pages'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <CharacterPage /> },
      { path: '/favorites', element: <FavoritePage /> },
    ],
  },
  {
    path: '/characters/:id',
    element: <CharacterDetailsPage />,
  },
])
