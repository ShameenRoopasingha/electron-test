import { ipcMain } from 'electron'
import {
  createBill,
  deleteBill,
  updateBill,
  getAllBills,
  getBillById,
  BaseBillInputType
} from '../../services/billService'

ipcMain.handle('bill:create', async (_event, data: BaseBillInputType) => {
  try {
    return await createBill(data)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to create bill')
  }
})

ipcMain.handle('bill:getAll', async () => {
  try {
    return await getAllBills()
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to fetch bills')
  }
})

ipcMain.handle('bill:getById', async (_event, id: number) => {
  try {
    return await getBillById(id)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to fetch bill')
  }
})

ipcMain.handle('bill:update', async (_event, id: number, data: Partial<BaseBillInputType>) => {
  try {
    return await updateBill(id, data)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to update bill')
  }
})

ipcMain.handle('bill:delete', async (_event, id: number) => {
  try {
    await deleteBill(id)
    return true
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to delete bill')
  }
})
