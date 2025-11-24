import { ipcMain } from 'electron'
import {
  createDefect,
  deleteDefect,
  getAllDefects,
  getDefectById,
  updateDefect
} from '../../services/defectService'

ipcMain.handle('defect:create', async (_event, data) => {
  return await createDefect(data)
})

ipcMain.handle('defect:getAll', async () => {
  return await getAllDefects()
})

ipcMain.handle('defect:getById', async (_event, id: number) => {
  return await getDefectById(id)
})

ipcMain.handle('defect:update', async (_event, id: number, data) => {
  return await updateDefect(id, data)
})

ipcMain.handle('defect:delete', async (_event, id: number) => {
  await deleteDefect(id)
  return true
})
