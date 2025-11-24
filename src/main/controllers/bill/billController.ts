import { ipcMain } from 'electron'

import {
  createBill,
  deleteBill,
  updateBill,
  getAllBills,
  getBillById
} from '../../services/billService'

ipcMain.handle('bill:create', async (_event, data) => {
  return await createBill(data)
})

ipcMain.handle('bill:getAll', async () => {
  return await getAllBills()
})
ipcMain.handle('bill:getById', async (_event, id: number) => {
  return await getBillById(id)
})

ipcMain.handle('bill:update', async (_event, id: number, data) => {
  return await updateBill(id, data)
})

ipcMain.handle('bill:delete', async (_event, id: number) => {
  await deleteBill(id)
  return true
})
