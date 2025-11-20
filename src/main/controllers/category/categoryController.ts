import { ipcMain } from 'electron'
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory
} from 'main/services/categoryService'

ipcMain.handle('category:create', async (_event, data) => {
  return await createCategory(data)
})

ipcMain.handle('category:getAll', async () => {
  return await getAllCategories()
})

ipcMain.handle('category:getById', async (_event, id: number) => {
  return await getCategoryById(id)
})

ipcMain.handle('category:update', async (_event, id: number, data) => {
  return await updateCategory(id, data)
})

ipcMain.handle('category:delete', async (_event, id: number) => {
  await deleteCategory(id)
  return true
})
