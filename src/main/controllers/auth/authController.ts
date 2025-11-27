import { ipcMain } from 'electron'
import {
  loginUser,
  verifyToken,
  registerOwner,
  LoginInput,
  OwnerRegisterInput,
  TokenPayload
} from '../../services/authService'

export function setupAuthHandlers(): void {
  ipcMain.handle('auth:login', async (_event, data: LoginInput) => {
    try {
      return await loginUser(data)
    } catch (error: unknown) {
      throw new Error((error as Error).message || 'Authentication failed')
    }
  })

  ipcMain.handle('auth:ownerRegister', async (_event, data: OwnerRegisterInput) => {
    try {
      return await registerOwner(data)
    } catch (error: unknown) {
      throw new Error((error as Error).message || 'Owner registration failed')
    }
  })

  ipcMain.handle('auth:verifyToken', async (_event, token: string): Promise<TokenPayload> => {
    try {
      return await verifyToken(token)
    } catch (error: unknown) {
      throw new Error((error as Error).message || 'Token verification failed')
    }
  })
}

setupAuthHandlers()
