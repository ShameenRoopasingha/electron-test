import { RouteObject } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import { RequireAbility } from '../components/RequireAbility'

export const dashboardRoute: RouteObject[] = [
  {
    path: '/dashboard',
    element: (
      <RequireAbility subject="Dashboard">
        <Dashboard />
      </RequireAbility>
    )
  }
]
