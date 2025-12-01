import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { z } from 'zod'
import {
  BillInputSchema,
  UserInputSchema,
  ItemInputSchema,
  CategoryInputSchema,
  RestockInputSchema,
  RestockItemInputSchema,
  ExpiredItemInputSchema,
  DefectInputSchema,
  BusinessDetailsInputSchema,
  SupplierInputSchema,
  CustomerInputSchema,
  CheckoutInputSchema,
  ReturnedOrderInputSchema,
  UserSessionInputSchema
} from '../generated/zod/schemas'

console.log('Preload script loaded')

// Define base input types for create operations
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseBillInput = BillInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  user: true,
  customer: true,
  checkouts: true,
  returnedOrders: true
})
type BaseBillInputType = z.infer<typeof BaseBillInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseUserInput = UserInputSchema.pick({
  username: true,
  email: true,
  password: true,
  role: true,
  fname: true,
  lname: true,
  phone: true,
  address: true,
  bank_account: true
})
type BaseUserInputType = z.infer<typeof BaseUserInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseItemInput = ItemInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  category: true,
  supplier: true,
  checkouts: true,
  returnedOrders: true,
  defects: true,
  expiredItems: true,
  restockItems: true
})
type BaseItemInputType = z.infer<typeof BaseItemInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseCategoryInput = CategoryInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  items: true
})
type BaseCategoryInputType = z.infer<typeof BaseCategoryInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseRestockInput = RestockInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  supplier: true,
  user: true,
  items: true
})
type BaseRestockInputType = z.infer<typeof BaseRestockInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseRestockItemInput = RestockItemInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  restock: true,
  item: true
})
type BaseRestockItemInputType = z.infer<typeof BaseRestockItemInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseExpiredItemInput = ExpiredItemInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  item: true,
  user: true
})
type BaseExpiredItemInputType = z.infer<typeof BaseExpiredItemInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseDefectInput = DefectInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  item: true,
  user: true
})
type BaseDefectInputType = z.infer<typeof BaseDefectInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseBusinessDetailsInput = BusinessDetailsInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  owner: true
})
type BaseBusinessDetailsInputType = z.infer<typeof BaseBusinessDetailsInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseSupplierInput = SupplierInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  items: true,
  restocks: true
})
type BaseSupplierInputType = z.infer<typeof BaseSupplierInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseCustomerInput = CustomerInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  bills: true
})
type BaseCustomerInputType = z.infer<typeof BaseCustomerInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseCheckoutInput = CheckoutInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  bill: true,
  item: true
})
type BaseCheckoutInputType = z.infer<typeof BaseCheckoutInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseReturnedOrderInput = ReturnedOrderInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  bill: true,
  item: true
})
type BaseReturnedOrderInputType = z.infer<typeof BaseReturnedOrderInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseUserSessionInput = UserSessionInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  user: true
})
type BaseUserSessionInputType = z.infer<typeof BaseUserSessionInput>

// Auth types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginInput = UserInputSchema.pick({
  username: true,
  password: true
})
type LoginInputType = z.infer<typeof LoginInput>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OwnerRegisterInput = UserInputSchema.pick({
  username: true,
  password: true,
  email: true,
  fname: true,
  lname: true,
  phone: true,
  address: true,
  bank_account: true
})
type OwnerRegisterInputType = z.infer<typeof OwnerRegisterInput>

// Helper function to get auth token
const getAuthToken = (): string | null => {
  // localStorage not available in preload context, return null for now
  return null
}

// Helper function to make authenticated IPC calls
const authenticatedInvoke = (channel: string, ...args: unknown[]): Promise<unknown> => {
  const token = getAuthToken()
  if (!token) {
    throw new Error('No authentication token found. Please log in.')
  }
  return ipcRenderer.invoke(channel, token, ...args)
}

// -----------------------------------
// Define your custom API bridges here
// -----------------------------------

const api = {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  // Auth
  auth: {
    login: (input: LoginInputType) => ipcRenderer.invoke('auth:login', input),
    ownerRegister: (input: OwnerRegisterInputType) =>
      ipcRenderer.invoke('auth:ownerRegister', input),
    verifyToken: (token: string) => ipcRenderer.invoke('auth:verifyToken', token)
  },
  // Users
  user: {
    create: (data: BaseUserInputType) => authenticatedInvoke('user:create', data),
    getAll: () => authenticatedInvoke('user:getAll'),
    getById: (id: string) => authenticatedInvoke('user:getById', id),
    update: (id: string, data: Partial<BaseUserInputType>) =>
      authenticatedInvoke('user:update', id, data),
    delete: (id: string) => authenticatedInvoke('user:delete', id)
  },
  // User Sessions
  userSession: {
    create: (data: BaseUserSessionInputType) => ipcRenderer.invoke('userSession:create', data),
    getAll: () => ipcRenderer.invoke('userSession:getAll'),
    getById: (id: string) => ipcRenderer.invoke('userSession:getById', id),
    update: (id: string, data: Partial<BaseUserSessionInputType>) =>
      ipcRenderer.invoke('userSession:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('userSession:delete', id)
  },
  // Items
  item: {
    create: (data: BaseItemInputType) => ipcRenderer.invoke('item:create', data),
    getAll: () => ipcRenderer.invoke('item:getAll'),
    getById: (id: string) => ipcRenderer.invoke('item:getById', id),
    update: (id: string, data: Partial<BaseItemInputType>) =>
      ipcRenderer.invoke('item:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('item:delete', id)
  },
  // Categories
  category: {
    create: (data: BaseCategoryInputType) => ipcRenderer.invoke('category:create', data),
    getAll: () => ipcRenderer.invoke('category:getAll'),
    getById: (id: string) => ipcRenderer.invoke('category:getById', id),
    update: (id: string, data: Partial<BaseCategoryInputType>) =>
      ipcRenderer.invoke('category:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('category:delete', id)
  },
  // Restock
  restock: {
    create: (data: BaseRestockInputType) => ipcRenderer.invoke('restock:create', data),
    getAll: () => ipcRenderer.invoke('restock:getAll'),
    getById: (id: string) => ipcRenderer.invoke('restock:getById', id),
    update: (id: string, data: Partial<BaseRestockInputType>) =>
      ipcRenderer.invoke('restock:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('restock:delete', id)
  },
  // Restock Items
  restockItem: {
    create: (data: BaseRestockItemInputType) => ipcRenderer.invoke('restockItem:create', data),
    getAll: () => ipcRenderer.invoke('restockItem:getAll'),
    getById: (id: string) => ipcRenderer.invoke('restockItem:getById', id),
    update: (id: string, data: Partial<BaseRestockItemInputType>) =>
      ipcRenderer.invoke('restockItem:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('restockItem:delete', id)
  },
  // Expired Items
  expiredItem: {
    create: (data: BaseExpiredItemInputType) => ipcRenderer.invoke('expiredItem:create', data),
    getAll: () => ipcRenderer.invoke('expiredItem:getAll'),
    getById: (id: string) => ipcRenderer.invoke('expiredItem:getById', id),
    update: (id: string, data: Partial<BaseExpiredItemInputType>) =>
      ipcRenderer.invoke('expiredItem:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('expiredItem:delete', id)
  },
  // Defects
  defect: {
    create: (data: BaseDefectInputType) => ipcRenderer.invoke('defect:create', data),
    getAll: () => ipcRenderer.invoke('defect:getAll'),
    getById: (id: string) => ipcRenderer.invoke('defect:getById', id),
    update: (id: string, data: Partial<BaseDefectInputType>) =>
      ipcRenderer.invoke('defect:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('defect:delete', id)
  },
  // Business Details
  businessDetails: {
    create: (data: BaseBusinessDetailsInputType) =>
      ipcRenderer.invoke('businessDetails:create', data),
    getAll: () => ipcRenderer.invoke('businessDetails:getAll'),
    getById: (id: string) => ipcRenderer.invoke('businessDetails:getById', id),
    update: (id: string, data: Partial<BaseBusinessDetailsInputType>) =>
      ipcRenderer.invoke('businessDetails:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('businessDetails:delete', id)
  },
  // Suppliers
  supplier: {
    create: (data: BaseSupplierInputType) => ipcRenderer.invoke('supplier:create', data),
    getAll: () => ipcRenderer.invoke('supplier:getAll'),
    getById: (id: string) => ipcRenderer.invoke('supplier:getById', id),
    update: (id: string, data: Partial<BaseSupplierInputType>) =>
      ipcRenderer.invoke('supplier:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('supplier:delete', id)
  },
  // Customers
  customer: {
    create: (data: BaseCustomerInputType) => ipcRenderer.invoke('customer:create', data),
    getAll: () => ipcRenderer.invoke('customer:getAll'),
    getById: (id: string) => ipcRenderer.invoke('customer:getById', id),
    update: (id: string, data: Partial<BaseCustomerInputType>) =>
      ipcRenderer.invoke('customer:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('customer:delete', id)
  },
  // Bills
  bill: {
    create: (data: BaseBillInputType) => ipcRenderer.invoke('bill:create', data),
    getAll: () => ipcRenderer.invoke('bill:getAll'),
    getById: (id: string) => ipcRenderer.invoke('bill:getById', id),
    update: (id: string, data: Partial<BaseBillInputType>) =>
      ipcRenderer.invoke('bill:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('bill:delete', id)
  },
  // Checkout
  checkout: {
    create: (data: BaseCheckoutInputType) => ipcRenderer.invoke('checkout:create', data),
    getAll: () => ipcRenderer.invoke('checkout:getAll'),
    getById: (id: string) => ipcRenderer.invoke('checkout:getById', id),
    update: (id: string, data: Partial<BaseCheckoutInputType>) =>
      ipcRenderer.invoke('checkout:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('checkout:delete', id)
  },
  // Returned Orders
  returnedOrder: {
    create: (data: BaseReturnedOrderInputType) => ipcRenderer.invoke('returnedOrder:create', data),
    getAll: () => ipcRenderer.invoke('returnedOrder:getAll'),
    getById: (id: string) => ipcRenderer.invoke('returnedOrder:getById', id),
    update: (id: string, data: Partial<BaseReturnedOrderInputType>) =>
      ipcRenderer.invoke('returnedOrder:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('returnedOrder:delete', id)
  }
}

// -------------------------------------------------------
// Expose the API only when context isolation is enabled
// -------------------------------------------------------
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in global.d.ts)
  window.electron = electronAPI
  // @ts-ignore (define in global.d.ts)
  window.api = api
}
