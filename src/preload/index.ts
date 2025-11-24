import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { LoginInput } from '../main/services/authService'

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
    create: (data) => ipcRenderer.invoke('user:create', data),
    getAll: () => ipcRenderer.invoke('user:getAll'),
    getById: (id) => ipcRenderer.invoke('user:getById', id),
    update: (id, data) => ipcRenderer.invoke('user:update', id, data),
    delete: (id) => ipcRenderer.invoke('user:delete', id)
  },
  // User Sessions
  userSession: {
    create: (data) => ipcRenderer.invoke('userSession:create', data),
    getAll: () => ipcRenderer.invoke('userSession:getAll'),
    getById: (id) => ipcRenderer.invoke('userSession:getById', id),
    update: (id, data) => ipcRenderer.invoke('userSession:update', id, data),
    delete: (id) => ipcRenderer.invoke('userSession:delete', id)
  },
  // Items
  item: {
    create: (data) => ipcRenderer.invoke('item:create', data),
    getAll: () => ipcRenderer.invoke('item:getAll'),
    getById: (id) => ipcRenderer.invoke('item:getById', id),
    update: (id, data) => ipcRenderer.invoke('item:update', id, data),
    delete: (id) => ipcRenderer.invoke('item:delete', id)
  },
  // Categories
  category: {
    create: (data) => ipcRenderer.invoke('category:create', data),
    getAll: () => ipcRenderer.invoke('category:getAll'),
    getById: (id) => ipcRenderer.invoke('category:getById', id),
    update: (id, data) => ipcRenderer.invoke('category:update', id, data),
    delete: (id) => ipcRenderer.invoke('category:delete', id)
  },
  // Restock
  restock: {
    create: (data) => ipcRenderer.invoke('restock:create', data),
    getAll: () => ipcRenderer.invoke('restock:getAll'),
    getById: (id) => ipcRenderer.invoke('restock:getById', id),
    update: (id, data) => ipcRenderer.invoke('restock:update', id, data),
    delete: (id) => ipcRenderer.invoke('restock:delete', id)
  },
  // Restock Items
  restockItem: {
    create: (data) => ipcRenderer.invoke('restockItem:create', data),
    getAll: () => ipcRenderer.invoke('restockItem:getAll'),
    getById: (id) => ipcRenderer.invoke('restockItem:getById', id),
    update: (id, data) => ipcRenderer.invoke('restockItem:update', id, data),
    delete: (id) => ipcRenderer.invoke('restockItem:delete', id)
  },
  // Expired Items
  expiredItem: {
    create: (data) => ipcRenderer.invoke('expiredItem:create', data),
    getAll: () => ipcRenderer.invoke('expiredItem:getAll'),
    getById: (id) => ipcRenderer.invoke('expiredItem:getById', id),
    update: (id, data) => ipcRenderer.invoke('expiredItem:update', id, data),
    delete: (id) => ipcRenderer.invoke('expiredItem:delete', id)
  },
  // Defects
  defect: {
    create: (data) => ipcRenderer.invoke('defect:create', data),
    getAll: () => ipcRenderer.invoke('defect:getAll'),
    getById: (id) => ipcRenderer.invoke('defect:getById', id),
    update: (id, data) => ipcRenderer.invoke('defect:update', id, data),
    delete: (id) => ipcRenderer.invoke('defect:delete', id)
  },
  // Business Details
  businessDetails: {
    create: (data) => ipcRenderer.invoke('businessDetails:create', data),
    getAll: () => ipcRenderer.invoke('businessDetails:getAll'),
    getById: (id) => ipcRenderer.invoke('businessDetails:getById', id),
    update: (id, data) => ipcRenderer.invoke('businessDetails:update', id, data),
    delete: (id) => ipcRenderer.invoke('businessDetails:delete', id)
  },
  // Suppliers
  supplier: {
    create: (data) => ipcRenderer.invoke('supplier:create', data),
    getAll: () => ipcRenderer.invoke('supplier:getAll'),
    getById: (id) => ipcRenderer.invoke('supplier:getById', id),
    update: (id, data) => ipcRenderer.invoke('supplier:update', id, data),
    delete: (id) => ipcRenderer.invoke('supplier:delete', id)
  },
  // Customers
  customer: {
    create: (data) => ipcRenderer.invoke('customer:create', data),
    getAll: () => ipcRenderer.invoke('customer:getAll'),
    getById: (id) => ipcRenderer.invoke('customer:getById', id),
    update: (id, data) => ipcRenderer.invoke('customer:update', id, data),
    delete: (id) => ipcRenderer.invoke('customer:delete', id)
  },
  // Bills
  bill: {
    create: (data) => ipcRenderer.invoke('bill:create', data),
    getAll: () => ipcRenderer.invoke('bill:getAll'),
    getById: (id) => ipcRenderer.invoke('bill:getById', id),
    update: (id, data) => ipcRenderer.invoke('bill:update', id, data),
    delete: (id) => ipcRenderer.invoke('bill:delete', id)
  },
  // Checkout
  checkout: {
    create: (data) => ipcRenderer.invoke('checkout:create', data),
    getAll: () => ipcRenderer.invoke('checkout:getAll'),
    getById: (id) => ipcRenderer.invoke('checkout:getById', id),
    update: (id, data) => ipcRenderer.invoke('checkout:update', id, data),
    delete: (id) => ipcRenderer.invoke('checkout:delete', id)
  },
  // Returned Orders
  returnedOrder: {
    create: (data) => ipcRenderer.invoke('returnedOrder:create', data),
    getAll: () => ipcRenderer.invoke('returnedOrder:getAll'),
    getById: (id) => ipcRenderer.invoke('returnedOrder:getById', id),
    update: (id, data) => ipcRenderer.invoke('returnedOrder:update', id, data),
    delete: (id) => ipcRenderer.invoke('returnedOrder:delete', id)
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
