import Users from '../pages/users'
import { RouteObject } from 'react-router-dom'

export const usersRoute: RouteObject[] = [
  {
    path: '/users',
    element: <Users />
  }
]
