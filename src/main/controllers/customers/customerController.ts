import { ipcMain } from 'electron'

import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer
} from '../../services/customerService'

ipcMain.handle('customer:create', async (_event, data) => {
  return await createCustomer(data)
})

ipcMain.handle('customer:getAll', async () => {
  return await getAllCustomers()
})
ipcMain.handle('customer:getById', async (_event, id: number) => {
  return await getCustomerById(id)
})

ipcMain.handle('customer:update', async (_event, id: number, data) => {
  return await updateCustomer(id, data)
})
ipcMain.handle('customer:delete', async (_event, id: number) => {
  await deleteCustomer(id)
  return true
})
