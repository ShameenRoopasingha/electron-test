import { RouteObject } from 'react-router-dom'
import Dashboard from '../pages/dashboard'

export const dashboardRoute: RouteObject[] = [
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]
