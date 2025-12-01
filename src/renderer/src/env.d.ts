/// <reference types="vite/client" />

declare global {
  interface Window {
    api: {
      getAppVersion: () => Promise<string>
      auth: {
        login: (input: unknown) => Promise<unknown>
        ownerRegister: (input: unknown) => Promise<unknown>
        verifyToken: (token: string) => Promise<unknown>
      }
      user: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      userSession: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      item: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      category: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      restock: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      restockItem: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      expiredItem: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      defect: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      businessDetails: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      supplier: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      customer: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      bill: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      checkout: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
      returnedOrder: {
        create: (data: unknown) => Promise<unknown>
        getAll: () => Promise<unknown>
        getById: (id: string) => Promise<unknown>
        update: (id: string, data: unknown) => Promise<unknown>
        delete: (id: string) => Promise<unknown>
      }
    }
  }
}
