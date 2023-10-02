import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from '@/pages/ErrorPage.tsx'
import { HomePage } from '@/pages/HomePage'
import { Root } from '@/Root'

export const routes = [
  {
    path: '',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/:transaction',
        element: <HomePage />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router
