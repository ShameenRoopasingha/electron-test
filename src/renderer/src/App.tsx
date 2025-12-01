import { ReactElement, useState, useEffect } from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import { appRoutes } from './routes'
import Layout from './Layout'
import { AbilityContext } from './context/AbilityContext'
import { defineAbilityFor } from './ability'

function RoutesWrapper(): ReactElement | null {
  const routes = useRoutes(appRoutes)
  return routes
}

function App(): ReactElement {
  const [role, setRole] = useState<string | undefined>(() => {
    // Try to get role from token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      try {
        // Decode token to get role (simple decode, not full verification)
        const payload = JSON.parse(atob(token.split('.')[1]))
        return payload.role
      } catch {
        // Invalid token, clear it
        localStorage.removeItem('authToken')
        return undefined
      }
    }
    return undefined
  })

  useEffect(() => {
    const handleStorageChange = (): void => {
      const token = localStorage.getItem('authToken')
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]))
          setRole(payload.role)
        } catch {
          setRole(undefined)
        }
      } else {
        setRole(undefined)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const ability = defineAbilityFor(role)

  return (
    <AbilityContext.Provider value={ability}>
      <HashRouter>
        <Layout>
          <RoutesWrapper />
        </Layout>
      </HashRouter>
    </AbilityContext.Provider>
  )
}

export default App
