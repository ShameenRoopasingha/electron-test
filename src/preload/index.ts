import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { LoginInput } from '../main/services/authService'
import { Prisma } from '../generated/prisma/client'

// Helper function to get auth token
const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken')
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
    login: (input: LoginInput) => ipcRenderer.invoke('auth:login', input),
    ownerRegister: (input: LoginInput) => ipcRenderer.invoke('auth:OwnerRegister', input),
    verifyToken: (token: string) => ipcRenderer.invoke('auth:verifyToken', token)
  },
  // Users
  user: {
    create: (data: Prisma.UserCreateInput) => authenticatedInvoke('user:create', data),
    getAll: () => authenticatedInvoke('user:getAll'),
    getById: (id: string) => authenticatedInvoke('user:getById', id),
    update: (id: string, data: Prisma.UserUpdateInput) => authenticatedInvoke('user:update', id, data),
    delete: (id: string) => authenticatedInvoke('user:delete', id)
  },
  // User Sessions
  userSession: {
    create: (data: Prisma.UserSessionCreateInput) => ipcRenderer.invoke('userSession:create', data),
    getAll: () => ipcRenderer.invoke('userSession:getAll'),
    getById: (id: string) => ipcRenderer.invoke('userSession:getById', id),
    update: (id: string, data: Prisma.UserSessionUpdateInput) => ipcRenderer.invoke('userSession:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('userSession:delete', id)
  },
  // Items
  item: {
    create: (data: Prisma.ItemCreateInput) => ipcRenderer.invoke('item:create', data),
    getAll: () => ipcRenderer.invoke('item:getAll'),
    getById: (id: string) => ipcRenderer.invoke('item:getById', id),
    update: (id: string, data: Prisma.ItemUpdateInput) => ipcRenderer.invoke('item:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('item:delete', id)
  },
  // Categories
  category: {
    create: (data: Prisma.CategoryCreateInput) => ipcRenderer.invoke('category:create', data),
    getAll: () => ipcRenderer.invoke('category:getAll'),
    getById: (id: string) => ipcRenderer.invoke('category:getById', id),
    update: (id: string, data: Prisma.CategoryUpdateInput) => ipcRenderer.invoke('category:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('category:delete', id)
  },
  // Restock
  restock: {
    create: (data: Prisma.RestockCreateInput) => ipcRenderer.invoke('restock:create', data),
    getAll: () => ipcRenderer.invoke('restock:getAll'),
    getById: (id: string) => ipcRenderer.invoke('restock:getById', id),
    update: (id: string, data: Prisma.RestockUpdateInput) => ipcRenderer.invoke('restock:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('restock:delete', id)
  },
  // Restock Items
  restockItem: {
    create: (data: Prisma.RestockItemCreateInput) => ipcRenderer.invoke('restockItem:create', data),
    getAll: () => ipcRenderer.invoke('restockItem:getAll'),
    getById: (id: string) => ipcRenderer.invoke('restockItem:getById', id),
    update: (id: string, data: Prisma.RestockItemUpdateInput) => ipcRenderer.invoke('restockItem:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('restockItem:delete', id)
  },
  // Expired Items
  expiredItem: {
    create: (data: Prisma.ExpiredItemCreateInput) => ipcRenderer.invoke('expiredItem:create', data),
    getAll: () => ipcRenderer.invoke('expiredItem:getAll'),
    getById: (id: string) => ipcRenderer.invoke('expiredItem:getById', id),
    update: (id: string, data: Prisma.ExpiredItemUpdateInput) => ipcRenderer.invoke('expiredItem:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('expiredItem:delete', id)
  },
  // Defects
  defect: {
    create: (data: Prisma.DefectCreateInput) => ipcRenderer.invoke('defect:create', data),
    getAll: () => ipcRenderer.invoke('defect:getAll'),
    getById: (id: string) => ipcRenderer.invoke('defect:getById', id),
    update: (id: string, data: Prisma.DefectUpdateInput) => ipcRenderer.invoke('defect:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('defect:delete', id)
  },
  // Business Details
  businessDetails: {
    create: (data: Prisma.BusinessDetailsCreateInput) => ipcRenderer.invoke('businessDetails:create', data),
    getAll: () => ipcRenderer.invoke('businessDetails:getAll'),
    getById: (id: string) => ipcRenderer.invoke('businessDetails:getById', id),
    update: (id: string, data: Prisma.BusinessDetailsUpdateInput) => ipcRenderer.invoke('businessDetails:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('businessDetails:delete', id)
  },
  // Suppliers
  supplier: {
    create: (data: Prisma.SupplierCreateInput) => ipcRenderer.invoke('supplier:create', data),
    getAll: () => ipcRenderer.invoke('supplier:getAll'),
    getById: (id: string) => ipcRenderer.invoke('supplier:getById', id),
    update: (id: string, data: Prisma.SupplierUpdateInput) => ipcRenderer.invoke('supplier:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('supplier:delete', id)
  },
  // Customers
  customer: {
    create: (data: Prisma.CustomerCreateInput) => ipcRenderer.invoke('customer:create', data),
    getAll: () => ipcRenderer.invoke('customer:getAll'),
    getById: (id: string) => ipcRenderer.invoke('customer:getById', id),
    update: (id: string, data: Prisma.CustomerUpdateInput) => ipcRenderer.invoke('customer:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('customer:delete', id)
  },
  // Bills
  bill: {
    create: (data: Prisma.BillCreateInput) => ipcRenderer.invoke('bill:create', data),
    getAll: () => ipcRenderer.invoke('bill:getAll'),
    getById: (id: string) => ipcRenderer.invoke('bill:getById', id),
    update: (id: string, data: Prisma.BillUpdateInput) => ipcRenderer.invoke('bill:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('bill:delete', id)
  },
  // Checkout
  checkout: {
    create: (data: Prisma.CheckoutCreateInput) => ipcRenderer.invoke('checkout:create', data),
    getAll: () => ipcRenderer.invoke('checkout:getAll'),
    getById: (id: string) => ipcRenderer.invoke('checkout:getById', id),
    update: (id: string, data: Prisma.CheckoutUpdateInput) => ipcRenderer.invoke('checkout:update', id, data),
    delete: (id: string) => ipcRenderer.invoke('checkout:delete', id)
  },
  // Returned Orders
  returnedOrder: {
    create: (data: Prisma.ReturnedOrderCreateInput) => ipcRenderer.invoke('returnedOrder:create', data),
    getAll: () => ipcRenderer.invoke('returnedOrder:getAll'),
    getById: (id: string) => ipcRenderer.invoke('returnedOrder:getById', id),
    update: (id: string, data: Prisma.ReturnedOrderUpdateInput) => ipcRenderer.invoke('returnedOrder:update', id, data),
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
    contextBridge.exposeInMainWorld('api', {
      auth: {
        login: (input: LoginInput) => ipcRenderer.invoke('auth:login', input),
        verifyToken: (token: string) => ipcRenderer.invoke('auth:verifyToken', token)
      }
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in global.d.ts)
  window.electron = electronAPI
  // @ts-ignore (define in global.d.ts)
  window.api = api
}
