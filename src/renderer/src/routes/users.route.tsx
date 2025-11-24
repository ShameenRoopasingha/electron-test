import Users from '../pages/users'
import { RouteObject } from 'react-router-dom'
import { RequireAbility } from '../components/RequireAbility'

export const usersRoute: RouteObject[] = [
  {
    path: '/users',
    element: (
      <RequireAbility subject="User">
        <Users />
      </RequireAbility>
    )
  }
]
