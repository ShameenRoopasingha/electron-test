import Customers from '../pages/customers'
import { RouteObject } from 'react-router-dom'
export const customersRoute: RouteObject[] = [
  {
    path: '/customers',
    element: <Customers />
  }
]
