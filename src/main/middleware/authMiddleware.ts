import { defineAbilityFor } from '../../shared/ability'
import type { Actions, Subjects } from '../../shared/ability'

export interface AuthenticatedRequest {
  user?: {
    id: string
    role: string
    email: string
  }
  body: Record<string, unknown>
  params: Record<string, string>
  query: Record<string, unknown>
}

interface ResponseType {
  status: (code: number) => { json: (data: Record<string, unknown>) => void }
}

export const requirePermission = (action: Actions, subject: Subjects) => {
  return (req: AuthenticatedRequest, res: ResponseType, next: () => void) => {
    try {
      const userRole = req.user?.role
      const ability = defineAbilityFor(userRole)

      if (ability.can(action, subject)) {
        next()
      } else {
        res.status(403).json({
          error: 'Insufficient permissions',
          required: { action, subject },
          userRole
        })
      }
    } catch (error) {
      console.error('Permission check error:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export const requireRole = (...allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: ResponseType, next: () => void) => {
    const userRole = req.user?.role

    if (!userRole) {
      return res.status(401).json({ error: 'Authentication required' })
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        error: 'Role not authorized',
        requiredRoles: allowedRoles,
        userRole
      })
    }

    next()
  }
}