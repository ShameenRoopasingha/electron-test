import Reports from '../pages/reports'
import { RouteObject } from 'react-router-dom'
import { RequireAbility } from '../components/RequireAbility'

export const reportsRoutes: RouteObject[] = [
  {
    path: '/reports',
    element: (
      <RequireAbility subject="Report">
        <Reports />
      </RequireAbility>
    )
  }
]
