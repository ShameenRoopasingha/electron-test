import { ipcMain } from 'electron'

import {
  createUser,
  deleteUser,
  updateUser,
  getAllUser,
  getUserById
} from 'main/services/userService'

ipcMain.handle('user:create', async (_event, data) => {
  return await createUser(data)
})

ipcMain.handle('user:getAll', async () => {
  return await getAllUser()
})
ipcMain.handle('user:getById', async (_event, id: number) => {
  return await getUserById(id)
})

ipcMain.handle('user:update', async (_event, id: number, data) => {
  return await updateUser(id, data)
})
ipcMain.handle('user:delete', async (_event, id: number) => {
  await deleteUser(id)
  return true
})
