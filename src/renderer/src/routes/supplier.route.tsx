import Supplier from '../pages/supplier'
import { RouteObject } from 'react-router-dom'
import { RequireAbility } from '../components/RequireAbility'

export const supplierRoute: RouteObject[] = [
  {
    path: '/suppliers',
    element: (
      <RequireAbility subject="Supplier">
        <Supplier />
      </RequireAbility>
    )
  }
]
