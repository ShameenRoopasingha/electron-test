import { ipcMain } from 'electron'
import {
  createRestockItem,
  deleteRestockItem,
  getAllRestockItems,
  getRestockItemById,
  updateRestockItem
} from 'main/services/restockItemService'

ipcMain.handle('restockItem:create', async (_event, data) => {
  return await createRestockItem(data)
})

ipcMain.handle('restockItem:getAll', async () => {
  return await getAllRestockItems()
})

ipcMain.handle('restockItem:getById', async (_event, id: number) => {
  return await getRestockItemById(id)
})

ipcMain.handle('restockItem:update', async (_event, id: number, data) => {
  return await updateRestockItem(id, data)
})

ipcMain.handle('restockItem:delete', async (_event, id: number) => {
  await deleteRestockItem(id)
  return true
})
