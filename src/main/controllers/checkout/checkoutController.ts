import { ipcMain } from 'electron'
import {
  createCheckout,
  deleteCheckout,
  getAllCheckouts,
  getCheckoutById,
  updateCheckout,
  BaseCheckoutInputType
} from '../../services/checkoutService'

ipcMain.handle('checkout:create', async (_event, data: BaseCheckoutInputType) => {
  try {
    return await createCheckout(data)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to create checkout')
  }
})

ipcMain.handle('checkout:getAll', async () => {
  try {
    return await getAllCheckouts()
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to fetch checkouts')
  }
})

ipcMain.handle('checkout:getById', async (_event, id: number) => {
  try {
    return await getCheckoutById(id)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to fetch checkout')
  }
})

ipcMain.handle('checkout:update', async (_event, id: number, data: Partial<BaseCheckoutInputType>) => {
  try {
    return await updateCheckout(id, data)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to update checkout')
  }
})

ipcMain.handle('checkout:delete', async (_event, id: number) => {
  try {
    await deleteCheckout(id)
    return true
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to delete checkout')
  }
})
