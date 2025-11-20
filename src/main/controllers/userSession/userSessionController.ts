import { ipcMain } from 'electron'
import {
  createUserSession,
  deleteUserSession,
  getAllUserSessions,
  getUserSessionById,
  updateUserSession
} from 'main/services/userSessionService'

ipcMain.handle('userSession:create', async (_event, data) => {
  return await createUserSession(data)
})

ipcMain.handle('userSession:getAll', async () => {
  return await getAllUserSessions()
})

ipcMain.handle('userSession:getById', async (_event, id: number) => {
  return await getUserSessionById(id)
})

ipcMain.handle('userSession:update', async (_event, id: number, data) => {
  return await updateUserSession(id, data)
})

ipcMain.handle('userSession:delete', async (_event, id: number) => {
  await deleteUserSession(id)
  return true
})
