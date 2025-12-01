import { createContext, useContext } from 'react'
import { createContextualCan } from '@casl/react'
import { Ability, AnyAbility } from '@casl/ability'
import { AppAbility } from '../ability'

export const AbilityContext = createContext<Ability | undefined>(undefined)
export const Can = createContextualCan(AbilityContext.Consumer as React.Consumer<AnyAbility>)

// Hook for easy access (optional)
export const useAbility = (): AppAbility => {
  const ability = useContext(AbilityContext)
  if (!ability) throw new Error('useAbility must be used within AbilityProvider')
  return ability as AppAbility
}
