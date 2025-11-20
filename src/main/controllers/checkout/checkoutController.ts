import { ipcMain } from 'electron'
import {
  createCheckout,
  deleteCheckout,
  getAllCheckouts,
  getCheckoutById,
  updateCheckout
} from '../../services/checkoutService'

ipcMain.handle('checkout:create', async (_event, data) => {
  return await createCheckout(data)
})

ipcMain.handle('checkout:getAll', async () => {
  return await getAllCheckouts()
})

ipcMain.handle('checkout:getById', async (_event, id: number) => {
  return await getCheckoutById(id)
})
ipcMain.handle('checkout:update', async (_event, id: number, data) => {
  return await updateCheckout(id, data)
})

ipcMain.handle('checkout:delete', async (_event, id: number) => {
  await deleteCheckout(id)
  return true
})
