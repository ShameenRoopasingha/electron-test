import { getPrisma } from '../../../lib/utils'
import { TokenPayload } from './authService'

const prisma = getPrisma()

export interface AuditEvent {
  userId: string | number
  action: string
  resource: string
  resourceId?: string | number
  details?: Record<string, unknown>
  ipAddress?: string
  userAgent?: string
  success: boolean
  errorMessage?: string
}

export const logAuditEvent = async (event: AuditEvent): Promise<void> => {
  try {
    // For now, just log to console. In production, you might want to store in database
    const logEntry = {
      timestamp: new Date().toISOString(),
      ...event
    }

    console.log('AUDIT:', JSON.stringify(logEntry, null, 2))

    // Optional: Store in database (uncomment when you have an audit table)
    // await prisma.auditLog.create({
    //   data: {
    //     userId: event.userId,
    //     action: event.action,
    //     resource: event.resource,
    //     resourceId: event.resourceId?.toString(),
    //     details: event.details ? JSON.stringify(event.details) : null,
    //     ipAddress: event.ipAddress,
    //     userAgent: event.userAgent,
    //     success: event.success,
    //     errorMessage: event.errorMessage,
    //     timestamp: new Date()
    //   }
    // })
  } catch (error) {
    console.error('Failed to log audit event:', error)
  }
}

export const logAccess = (
  user: TokenPayload,
  action: string,
  resource: string,
  success: boolean,
  details?: Record<string, unknown>
): void => {
  logAuditEvent({
    userId: user.id,
    action,
    resource,
    success,
    details
  }).catch(console.error)
}

export const logSecurityEvent = (
  event: 'login' | 'logout' | 'failed_login' | 'permission_denied' | 'token_expired',
  userId?: string | number,
  details?: Record<string, unknown>
): void => {
  logAuditEvent({
    userId: userId || 'anonymous',
    action: event,
    resource: 'security',
    success: event !== 'failed_login' && event !== 'permission_denied' && event !== 'token_expired',
    details
  }).catch(console.error)
}