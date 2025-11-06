import { sqliteTable, text, integer, real, sql } from 'drizzle-orm/sqlite-core'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'

// -------------------------- Database Schema Definitions ------------------------
export const user = sqliteTable('user', {
  id: integer('user_id').primaryKey({ autoIncrement: true }).unique(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: text('role').notNull(),
  fname: text('first_name').notNull(),
  lname: text('last_name').notNull(),
  phone: text('phone').notNull().unique(),
  address: text('address').notNull(),
  bank_account: text('bank_account').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

export const customer = sqliteTable('customer', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull().unique(),
  address: text('address').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

export const supplier = sqliteTable('supplier', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull().unique(),
  company: text('company').notNull(),
  address: text('address').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

export const catagory = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  name: text('name').notNull().unique(),
  description: text('description')
})

export const item = sqliteTable('items', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  name: text('name').notNull(),
  catagoaryId: integer('category_id')
    .notNull()
    .references(() => catagory.id, { onDelete: 'cascade' }),
  supplierId: integer('supplier_id')
    .notNull()
    .references(() => supplier.id, { onDelete: 'cascade' }),
  barcode: text('barcode').notNull().unique(),
  costPrice: real('cost_price').notNull(),
  sellingPrice: real('selling_price').notNull(),
  quantityInStock: integer('quantityInStock').notNull(),
  reorder_level: integer('reorder_level').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})
export const bill = sqliteTable('bill', {
  id: integer('bill_id').primaryKey({ autoIncrement: true }).unique(),
  userId: integer('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' })
    .notNull(),
  customerId: integer('customer_id')
    .notNull()
    .references(() => customer.id, { onDelete: 'cascade' }),
  totalAmount: real('paymentAmount').notNull(),
  paymentMethod: text('payment_method').notNull(),
  paymentStatus: text('payment_status').default('pending'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

export const checkout = sqliteTable('checkouts', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  bill_id: integer('bill_id')
    .notNull()
    .references(() => bill.id, { onDelete: 'cascade' }),
  itemId: integer('item_id')
    .notNull()
    .references(() => item.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull(),
  price: real('price').notNull(),
  payedAmount: real('payed_amount').notNull(),
  total: real('total')
    .generatedAlwaysAs(() => sql`${sql.identifier('quantity')} * ${sql.identifier('price')}`)
    .notNull(),
  balance: real('balance')
    .generatedAlwaysAs(() => sql`${sql.identifier('total')} - ${sql.identifier('payed_amount')}`)
    .notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

export const restock = sqliteTable('restocks', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  supplierId: integer('supplier_id')
    .notNull()
    .references(() => supplier.id, { onDelete: 'cascade' }),
  userId: integer('user_id').notNull(),
  totalCost: real('total_cost').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

export const restockItem = sqliteTable('restock_items', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  restockId: integer('restock_id')
    .notNull()
    .references(() => restock.id, { onDelete: 'cascade' }),
  itemId: integer('item_id').references(() => item.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull(),
  costPrice: real('cost_price').notNull()
})

export const returned_orders = sqliteTable('returned_orders', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  billId: integer('bill_id').references(() => bill.id, { onDelete: 'cascade' }),
  itemId: integer('item_id').references(() => item.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull(),
  reason: text('reason').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

export const defects = sqliteTable('defects', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  itemId: integer('item_id').references(() => item.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull(),
  reason: text('reason').notNull(),
  reportedBy: integer('reported_by').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

export const expired_items = sqliteTable('expired_items', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  itemId: integer('item_id').references(() => item.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull(),
  expirationDate: integer('expiration_date', { mode: 'timestamp' }).notNull(),
  disposedBy: integer('disposed_by')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  reason: text('reason'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

export const user_sessions = sqliteTable('user_sessions', {
  id: integer('session_id').primaryKey({ autoIncrement: true }).unique(),
  userId: integer('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  token: text('token').notNull().unique(),
  ipAddress: text('ip_address'),
  deviceInfo: text('device_info'),
  loginTime: integer('login_time', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  logoutTime: integer('logout_time', { mode: 'timestamp' }),
  isActive: integer('is_active').default(1)
})

// -------------------------- Zod Schemas for Insertion ------------------------
export const insertUserSchema = createInsertSchema(user, {
  username: z.string().min(3).max(30),
  email: z.email('email must be valid'),
  passwordHash: z.string().min(60).max(60),
  role: z.enum(['admin', 'cashier', 'user']),
  fname: z.string().min(1).max(50),
  lname: z.string().min(1).max(50),
  phone: z.string().min(10).max(15),
  address: z.string().min(5).max(255),
  bank_account: z.string().min(5).max(50)
})

export const insertCustomerSchema = createInsertSchema(customer, {
  name: z.string().min(1).max(100),
  phone: z.string().min(10).max(15),
  address: z.string().min(5).max(255),
  email: z.email()
})

export const insertSupplierSchema = createInsertSchema(supplier, {
  name: z.string().min(1).max(100),
  email: z.email(),
  phone: z.string().min(10).max(15),
  company: z.string().min(1).max(100),
  address: z.string().min(5).max(255)
})

export const insertCategorySchema = createInsertSchema(catagory, {
  name: z.string().min(1).max(50),
  description: z.string().max(255).optional()
})

export const insertItemSchema = createInsertSchema(item, {
  name: z.string().min(1).max(100),
  barcode: z.string().min(1).max(50),
  costPrice: z.number().min(0),
  sellingPrice: z.number().min(0),
  quantityInStock: z.number().min(0),
  reorder_level: z.number().min(0)
})

export const insertBillSchema = createInsertSchema(bill, {
  totalAmount: z.number().min(0),
  paymentMethod: z.enum(['cash', 'card', 'transfer']),
  paymentStatus: z.enum(['pending', 'paid', 'cancelled']).default('pending')
})

export const insertCheckoutSchema = createInsertSchema(checkout, {
  quantity: z.number().min(1),
  price: z.number().min(0),
  payedAmount: z.number().min(0)
})

export const insertRestockSchema = createInsertSchema(restock, {
  totalCost: z.number().min(0)
})

export const insertRestockItemSchema = createInsertSchema(restockItem, {
  quantity: z.number().min(1),
  costPrice: z.number().min(0)
})

export const insertReturnedOrderSchema = createInsertSchema(returned_orders, {
  quantity: z.number().min(1),
  reason: z.string().min(3)
})

export const insertDefectSchema = createInsertSchema(defects, {
  quantity: z.number().min(1),
  reason: z.string().min(3)
})

export const insertExpiredItemSchema = createInsertSchema(expired_items, {
  quantity: z.number().min(1),
  expirationDate: z.date(),
  reason: z.string().optional()
})

// ✅ Zod schema for session insertion (sign-in)
export const insertUserSessionSchema = createInsertSchema(user_sessions, {
  token: z.string().uuid('Invalid token format'),
  ipAddress: z.string().ip().optional(),
  deviceInfo: z.string().optional(),
  isActive: z.boolean().default(true)
})

// ✅ Zod schema for sign-in request
export const signInSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6)
})
