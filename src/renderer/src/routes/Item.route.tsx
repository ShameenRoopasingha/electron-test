import { ItemPage } from '@renderer/pages/item'
import { RouteObject } from 'react-router-dom'
import { RequireAbility } from '../components/RequireAbility'
import { InputItems } from '../elements/inputItems'
import { RestockItems } from '@renderer/elements/restockItems'
import { ExpiredItems } from '@renderer/elements/expiredItems'
import { DamagedItems } from '@renderer/elements/DamagedItems'

export const itemRoutes: RouteObject[] = [
  {
    path: '/items',
    element: (
      <RequireAbility subject="Item">
        <ItemPage />
      </RequireAbility>
    ),
    children: [
      { path: 'input-items', element: <InputItems /> },
      { path: 'restock-items', element: <RestockItems /> },
      { path: 'expired-items', element: <ExpiredItems /> },
      { path: 'damaged-items', element: <DamagedItems /> },
      { path: '', element: <InputItems /> }
    ]
  }
]
