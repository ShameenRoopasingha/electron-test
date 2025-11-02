import { itemRoutes } from './item.route'
import { RouteObject } from 'react-router-dom'
import { salesRoutes } from './sales.route'
import { dashboardRoute } from './dashboard.route'
import { usersRoute } from './users.route'
import { customersRoute } from './customers.route'
import { reportsRoutes } from './reports.route'
import { supplierRoute } from './supplier.route'

export const appRoutes: RouteObject[] = [
  ...itemRoutes,
  ...salesRoutes,
  ...dashboardRoute,
  ...usersRoute,
  ...customersRoute,
  ...reportsRoutes,
  ...supplierRoute
]
