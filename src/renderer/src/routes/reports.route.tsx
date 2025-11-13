import Reports from '@renderer/pages/reports'
import { RouteObject } from 'react-router-dom'

export const reportsRoutes: RouteObject[] = [
  {
    path: '/reports',
    element: <Reports />
  }
]
