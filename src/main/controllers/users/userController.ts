import { ipcMain } from 'electron'
import { authenticateIPCToken } from '../../middleware/jwtMiddleware'
import { logAccess } from '../../services/auditService'
import { defineAbilityFor } from '../../../shared/ability'
import type { TokenPayload } from '../../services/authService'

import {
  createUser,
  deleteUser,
  updateUser,
  getAllUser,
  getUserById
} from '../../services/userService'

// Helper function to validate token and check permissions
const validateAccess = (token: string, action: 'create' | 'read' | 'update' | 'delete', subject: 'User'): TokenPayload => {
  const user = authenticateIPCToken(token)
  const ability = defineAbilityFor(user.role)

  if (!ability.can(action, subject)) {
    logAccess(user, action, subject, false, { reason: 'insufficient_permissions' })
    throw new Error(`Insufficient permissions: cannot ${action} ${subject}`)
  }

  return user
}

ipcMain.handle('user:create', async (_event, token: string, data: any) => {
  const user = validateAccess(token, 'create', 'User')
  try {
    const result = await createUser(data)
    logAccess(user, 'create', 'User', true)
    return result
  } catch (error) {
    logAccess(user, 'create', 'User', false, { error: (error as Error).message })
    throw error
  }
})

ipcMain.handle('user:getAll', async (_event, token: string) => {
  const user = validateAccess(token, 'read', 'User')
  try {
    const result = await getAllUser()
    logAccess(user, 'read', 'User', true)
    return result
  } catch (error) {
    logAccess(user, 'read', 'User', false, { error: (error as Error).message })
    throw error
  }
})

ipcMain.handle('user:getById', async (_event, token: string, id: number) => {
  const user = validateAccess(token, 'read', 'User')
  try {
    const result = await getUserById(id)
    logAccess(user, 'read', 'User', true, { resourceId: id })
    return result
  } catch (error) {
    logAccess(user, 'read', 'User', false, { error: (error as Error).message, resourceId: id })
    throw error
  }
})

ipcMain.handle('user:update', async (_event, token: string, id: number, data: any) => {
  const user = validateAccess(token, 'update', 'User')
  try {
    const result = await updateUser(id, data)
    logAccess(user, 'update', 'User', true, { resourceId: id })
    return result
  } catch (error) {
    logAccess(user, 'update', 'User', false, { error: (error as Error).message, resourceId: id })
    throw error
  }
})

ipcMain.handle('user:delete', async (_event, token: string, id: number) => {
  const user = validateAccess(token, 'delete', 'User')
  try {
    await deleteUser(id)
    logAccess(user, 'delete', 'User', true, { resourceId: id })
    return true
  } catch (error) {
    logAccess(user, 'delete', 'User', false, { error: (error as Error).message, resourceId: id })
    throw error
  }
})
