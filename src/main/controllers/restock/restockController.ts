import { ipcMain } from 'electron'
import {
  createRestock,
  deleteRestock,
  getAllRestocks,
  getRestockById,
  updateRestock
} from 'main/services/restockService'

ipcMain.handle('restock:create', async (_event, data) => {
  return await createRestock(data)
})

ipcMain.handle('restock:getAll', async () => {
  return await getAllRestocks()
})

ipcMain.handle('restock:getById', async (_event, id: number) => {
  return await getRestockById(id)
})

ipcMain.handle('restock:update', async (_event, id: number, data) => {
  return await updateRestock(id, data)
})

ipcMain.handle('restock:delete', async (_event, id: number) => {
  await deleteRestock(id)
  return true
})
