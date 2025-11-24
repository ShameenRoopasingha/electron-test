import { Navigate } from 'react-router-dom'
import { Can } from '../context/AbilityContext'
import { ReactNode, JSX } from 'react'
import type { Actions, Subjects } from '../ability'

interface RequireAbilityProps {
  action?: Actions // Default: 'read'
  subject: Subjects
  children: ReactNode
  fallbackPath?: string // Default: '/sales'
}

export const RequireAbility = ({
  action = 'read',
  subject,
  children,
  fallbackPath = '/sales'
}: RequireAbilityProps): JSX.Element => {
  return (
    <Can I={action} a={subject} passThrough>
      {(allowed) => (allowed ? children : <Navigate to={fallbackPath} replace />)}
    </Can>
  )
}
