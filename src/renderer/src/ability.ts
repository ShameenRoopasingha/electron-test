import { AbilityBuilder, createMongoAbility, MongoAbility, CreateAbility } from '@casl/ability'

// Actions: What users can do
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'

// Subjects: What resources (map to your routes/models)
export type Subjects =
  | 'all' // Everything
  | 'Sales' // /sales, bills, checkouts, returns
  | 'Item' // /items, inventory, restocks, defects, expirations
  | 'Customer' // /customers
  | 'Supplier' // /suppliers
  | 'User' // /users, sessions
  | 'Report' // /reports
  | 'Dashboard' // /dashboard
  | 'Business' // Business details

export type AppAbility = MongoAbility<[Actions, Subjects]>
export const createAppAbility: CreateAbility<AppAbility> = createMongoAbility

// Build rules based on role (customize as needed)
export const defineAbilityFor = (role: string | undefined): AppAbility => {
  const { can, cannot, build } = new AbilityBuilder(createAppAbility)

  if (!role) {
    cannot('manage', 'all') // Default deny
    return build()
  }

  switch (role.toLowerCase()) {
    case 'owner':
      can('manage', 'all') // Full access to everything
      break

    case 'admin':
      can('manage', 'all') // Almost full access
      cannot('delete', 'Business') // Can't delete business details
      break

    case 'cashier':
      can('manage', 'Sales') // Full sales: create bills, checkouts, returns
      can('read', ['Item', 'Customer', 'Supplier', 'Dashboard']) // View inventory/customers but no edits
      can('create', 'Customer') // Add customers during sales
      cannot('manage', ['User', 'Report', 'Business']) // No admin/reports
      break

    case 'seller':
      can('read', ['Sales', 'Item', 'Customer', 'Dashboard']) // View sales/items/customers
      can('create', 'Sales') // Build carts/quotes but no final checkout
      cannot('manage', ['Supplier', 'User', 'Report', 'Business']) // Very limited
      cannot('update', 'Item') // No inventory changes
      break

    default:
      cannot('manage', 'all') // Unknown role: deny all
  }

  return build()
}
