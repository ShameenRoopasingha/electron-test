import { Navigate } from 'react-router-dom'
import { Can } from '../context/AbilityContext'
import { ReactNode } from 'react'

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
}: RequireAbilityProps) => {
  return (
    <Can I={action} a={subject} passThrough>
      {(allowed) => (allowed ? children : <Navigate to={fallbackPath} replace />)}
    </Can>
  )
}
