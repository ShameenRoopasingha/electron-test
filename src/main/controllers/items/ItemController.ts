import { ipcMain } from 'electron'
import {
  createItem,
  deleteItem,
  getAllItems,
  getItemById,
  updateItem,
  BaseItemInputType
} from '../../services/itemService'

ipcMain.handle('item:create', async (_event, data: BaseItemInputType) => {
  try {
    return await createItem(data)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to create item')
  }
})

ipcMain.handle('item:getAll', async () => {
  try {
    const data = await getAllItems()
    return { success: true, data }
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || 'Failed to fetch items'
    }
  }
})

ipcMain.handle('item:getById', async (_event, id: number) => {
  try {
    return await getItemById(id)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to fetch item')
  }
})

ipcMain.handle('item:update', async (_event, id: number, data: Partial<BaseItemInputType>) => {
  try {
    return await updateItem(id, data)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to update item')
  }
})

ipcMain.handle('item:delete', async (_event, id: number) => {
  try {
    await deleteItem(id)
    return true
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Failed to delete item')
  }
})
