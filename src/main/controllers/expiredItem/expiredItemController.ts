import { ipcMain } from 'electron'
import {
  createExpiredItem,
  deleteExpiredItem,
  getAllExpiredItems,
  getExpiredItemById,
  updateExpiredItem
} from '../../services/expiredItemService'

ipcMain.handle('expiredItem:create', async (_event, data) => {
  return await createExpiredItem(data)
})

ipcMain.handle('expiredItem:getAll', async () => {
  return await getAllExpiredItems()
})

ipcMain.handle('expiredItem:getById', async (_event, id: number) => {
  return await getExpiredItemById(id)
})

ipcMain.handle('expiredItem:update', async (_event, id: number, data) => {
  return await updateExpiredItem(id, data)
})

ipcMain.handle('expiredItem:delete', async (_event, id: number) => {
  await deleteExpiredItem(id)
  return true
})
