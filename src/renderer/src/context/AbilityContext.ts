import { createContext, useContext } from 'react'
import { createContextualCan } from '@casl/react'
import { AppAbility } from '../ability'

export const AbilityContext = createContext<AppAbility | undefined>(undefined)
export const Can = createContextualCan(AbilityContext.Consumer)

// Hook for easy access (optional)
export const useAbility = () => {
  const ability = useContext(AbilityContext)
  if (!ability) throw new Error('useAbility must be used within AbilityProvider')
  return ability
}
