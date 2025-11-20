import { ipcMain } from 'electron'

import {
  createSupplier,
  deleteSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier
} from 'main/services/supplierService'

ipcMain.handle('supplier:create', async (_event, data) => {
  return await createSupplier(data)
})

ipcMain.handle('supplier:getAll', async () => {
  return await getAllSuppliers()
})
ipcMain.handle('supplier:getById', async (_event, id: number) => {
  return await getSupplierById(id)
})

ipcMain.handle('supplier:update', async (_event, id: number, data) => {
  return await updateSupplier(id, data)
})
ipcMain.handle('supplier:delete', async (_event, id: number) => {
  await deleteSupplier(id)
  return true
})
