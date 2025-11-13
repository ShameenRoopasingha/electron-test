import { ipcMain } from 'electron'
import {
  createItem,
  deleteItem,
  getAllItems,
  getItemById,
  updateItem
} from 'main/services/itemService'

ipcMain.handle('item:create', async (_event, data) => {
  return await createItem(data)
})

ipcMain.handle('item:getAll', async () => {
  return await getAllItems()
})

ipcMain.handle('item:getById', async (_event, id: number) => {
  return await getItemById(id)
})

ipcMain.handle('item:update', async (_event, id: number, data) => {
  return await updateItem(id, data)
})

ipcMain.handle('item:delete', async (_event, id: number) => {
  await deleteItem(id)
  return true
})
