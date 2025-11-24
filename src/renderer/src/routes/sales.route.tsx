import Sales from '../pages/sales'
import { RouteObject } from 'react-router-dom'
import { RequireAbility } from '../components/RequireAbility'

export const salesRoutes: RouteObject[] = [
  {
    path: '/sales',
    element: (
      <RequireAbility subject="Sales">
        <Sales />
      </RequireAbility>
    )
  }
]
