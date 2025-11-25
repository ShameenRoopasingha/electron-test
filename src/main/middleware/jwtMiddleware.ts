import { verifyToken, TokenPayload } from '../services/authService'

export interface IPCEvent {
  sender: {
    send: (channel: string, ...args: unknown[]) => void
  }
}

// Middleware for IPC handlers
export const authenticateIPCToken = (token: string): TokenPayload => {
  if (!token) {
    throw new Error('Access token required')
  }

  try {
    return verifyToken(token)
  } catch {
    throw new Error('Invalid or expired token')
  }
}

// Higher-order function for IPC handlers with authentication
export const withAuth = <T extends unknown[], R>(
  handler: (user: TokenPayload, ...args: T) => R
) => {
  return (token: string, ...args: T): R => {
    const user = authenticateIPCToken(token)
    return handler(user, ...args)
  }
}