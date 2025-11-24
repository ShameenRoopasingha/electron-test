import { ipcMain } from 'electron'
import {
  createReturnedOrder,
  deleteReturnedOrder,
  getAllReturnedOrders,
  getReturnedOrderById,
  updateReturnedOrder
} from '../../services/returnedOrderService'

ipcMain.handle('returnedOrder:create', async (_event, data) => {
  return await createReturnedOrder(data)
})

ipcMain.handle('returnedOrder:getAll', async () => {
  return await getAllReturnedOrders()
})

ipcMain.handle('returnedOrder:getById', async (_event, id: number) => {
  return await getReturnedOrderById(id)
})

ipcMain.handle('returnedOrder:update', async (_event, id: number, data) => {
  return await updateReturnedOrder(id, data)
})

ipcMain.handle('returnedOrder:delete', async (_event, id: number) => {
  await deleteReturnedOrder(id)
  return true
})
