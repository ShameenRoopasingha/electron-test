import { ipcMain } from 'electron'
import { loginUser, verifyToken, LoginInput, TokenPayload } from '../../services/authService'

ipcMain.handle('auth:login', async (_event, data: LoginInput) => {
  try {
    return await loginUser(data)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Authentication failed')
  }
})

ipcMain.handle('auth:OwnerRegister', async (_event, data: LoginInput) => {
  try {
    return await loginUser(data)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Authentication failed')
  }
})
ipcMain.handle('auth:verifyToken', async (_event, token: string): Promise<TokenPayload> => {
  try {
    return await verifyToken(token)
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Token verification failed')
  }
})
