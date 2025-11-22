import { Permission, Role } from '@compugit/react-rbac'

export enum Permissions {
  CREATE_USER = 'create_user',
  DELETE_USER = 'delete_user',
  EDIT_ITEM = 'edit_item',
  DELETE_ITEM = 'delete_item',
  TAKE_REPORTS = 'take_reports',
  VIEW_INVENTORY = 'view_inventory',
  PROCESS_SALE = 'process_sale',
  MANAGE_RESTOCK = 'manage_restock',
  REPORT_DEFECT = 'report_defect',
  DISPOSE_EXPIRED = 'dispose_expired'
}

export const roles: Record<string, Role> = {
  owner: {
    id: 'owner',
    name: 'owner',
    permissions: [
      {
        id: 'users_create_user',
        name: 'Create User',
        resource: 'users',
        action: Permissions.CREATE_USER
      },
      {
        id: 'users_delete_user',
        name: 'Delete User',
        resource: 'users',
        action: Permissions.DELETE_USER
      },
      {
        id: 'items_edit_item',
        name: 'Edit Item',
        resource: 'items',
        action: Permissions.EDIT_ITEM
      },
      {
        id: 'items_delete_item',
        name: 'Delete Item',
        resource: 'items',
        action: Permissions.DELETE_ITEM
      },
      {
        id: 'reports_take_reports',
        name: 'Take Reports',
        resource: 'reports',
        action: Permissions.TAKE_REPORTS
      },
      {
        id: 'inventory_view_inventory',
        name: 'View Inventory',
        resource: 'inventory',
        action: Permissions.VIEW_INVENTORY
      },
      {
        id: 'sales_process_sale',
        name: 'Process Sale',
        resource: 'sales',
        action: Permissions.PROCESS_SALE
      },
      {
        id: 'restock_manage_restock',
        name: 'Manage Restock',
        resource: 'restock',
        action: Permissions.MANAGE_RESTOCK
      },
      {
        id: 'defects_report_defect',
        name: 'Report Defect',
        resource: 'defects',
        action: Permissions.REPORT_DEFECT
      },
      {
        id: 'expired_dispose_expired',
        name: 'Dispose Expired',
        resource: 'expired',
        action: Permissions.DISPOSE_EXPIRED
      }
    ] as Permission[]
  },
  admin: {
    id: 'admin',
    name: 'admin',
    permissions: [
      {
        id: 'items_edit_item',
        name: 'Edit Item',
        resource: 'items',
        action: Permissions.EDIT_ITEM
      },
      {
        id: 'items_delete_item',
        name: 'Delete Item',
        resource: 'items',
        action: Permissions.DELETE_ITEM
      },
      {
        id: 'reports_take_reports',
        name: 'Take Reports',
        resource: 'reports',
        action: Permissions.TAKE_REPORTS
      },
      {
        id: 'inventory_view_inventory',
        name: 'View Inventory',
        resource: 'inventory',
        action: Permissions.VIEW_INVENTORY
      },
      {
        id: 'sales_process_sale',
        name: 'Process Sale',
        resource: 'sales',
        action: Permissions.PROCESS_SALE
      },
      {
        id: 'restock_manage_restock',
        name: 'Manage Restock',
        resource: 'restock',
        action: Permissions.MANAGE_RESTOCK
      },
      {
        id: 'defects_report_defect',
        name: 'Report Defect',
        resource: 'defects',
        action: Permissions.REPORT_DEFECT
      },
      {
        id: 'expired_dispose_expired',
        name: 'Dispose Expired',
        resource: 'expired',
        action: Permissions.DISPOSE_EXPIRED
      }
    ] as Permission[]
  },
  cashier: {
    id: 'cashier',
    name: 'cashier',
    permissions: [
      {
        id: 'sales_process_sale',
        name: 'Process Sale',
        resource: 'sales',
        action: Permissions.PROCESS_SALE
      },
      {
        id: 'inventory_view_inventory',
        name: 'View Inventory',
        resource: 'inventory',
        action: Permissions.VIEW_INVENTORY
      }
    ] as Permission[]
  },
  seller: {
    id: 'seller',
    name: 'seller',
    permissions: [
      {
        id: 'sales_process_sale',
        name: 'Process Sale',
        resource: 'sales',
        action: Permissions.PROCESS_SALE
      }
    ] as Permission[]
  }
}

export const getRoleByName = (roleName: string): Role | undefined => roles[roleName.toLowerCase()]
