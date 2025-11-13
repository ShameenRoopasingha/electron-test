import Supplier from '../pages/supplier'
import { RouteObject } from 'react-router-dom'

export const supplierRoute: RouteObject[] = [
  {
    path: '/suppliers',
    element: <Supplier />
  }
]
