import Customers from '../pages/customers'
import { RouteObject } from 'react-router-dom'
import { RequireAbility } from '../components/RequireAbility'

export const customersRoute: RouteObject[] = [
  {
    path: '/customers',
    element: (
      <RequireAbility subject="Customer" action="read">
        <Customers />
      </RequireAbility>
    )
  }
]
