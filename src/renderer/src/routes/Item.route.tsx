import Item from '../pages/item'
import { RouteObject } from 'react-router-dom'

export const itemRoutes: RouteObject[] = [
  {
    path: '/items',
    element: <Item />
  }
]
