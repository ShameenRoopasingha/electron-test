import Item from '../pages/item'
import { RouteObject } from 'react-router-dom'
import { RequireAbility } from '../components/RequireAbility'

export const itemRoutes: RouteObject[] = [
  {
    path: '/items',
    element: (
      <RequireAbility subject="Item">
        <Item />
      </RequireAbility>
    )
  }
]
