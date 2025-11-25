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

  // Test component for role switching (development only)
  const RoleSwitcher = (): ReactElement => {
    // Mock tokens for different roles (in real app, these would come from login)
    const mockTokens: Record<string, string> = {
      owner: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6Im93bmVyIiwiaWF0IjoxNjQwMDAwMDAwLCJleHAiOjE2NzAwMDAwMDB9.mock_signature',
      admin: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQwMDAwMDAwLCJleHAiOjE2NzAwMDAwMDB9.mock_signature',
      cashier: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6ImNhc2hpZXIiLCJpYXQiOjE2NDAwMDAwMDAsImV4cCI6MTY3MDAwMDAwfQ.mock_signature',
      seller: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6InNlbGxlciIsImlhdCI6MTY0MDAwMDAwMCwiZXhwIjoxNjcwMDAwMDB9.mock_signature'
    }

    return (
      <div className="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded-lg z-50 max-w-xs">
        <h3 className="text-sm font-bold mb-2">Test Role Switcher</h3>
        <div className="flex gap-2 flex-wrap">
          {Object.entries(mockTokens).map(([testRole, token]) => (
            <button
              key={testRole}
              onClick={() => {
                localStorage.setItem('authToken', token)
                // Extract role from token
                const payload = JSON.parse(atob(token.split('.')[1]))
                setRole(payload.role)
                window.location.reload() // Force re-render with new ability
              }}
              className={`px-3 py-1 rounded text-xs ${
                role === testRole ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              {testRole}
            </button>
          ))}
          <button
            onClick={() => {
              localStorage.removeItem('authToken')
              setRole(undefined)
              window.location.reload()
            }}
            className="px-3 py-1 rounded text-xs bg-red-600 hover:bg-red-500"
          >
            Logout
          </button>
        </div>
        <p className="text-xs mt-2">Current: {role || 'none'}</p>
      </div>
    )
  }

  return (
    <AbilityContext.Provider value={ability}>
      <HashRouter>
        <Layout>
          <RoutesWrapper />
        </Layout>
        {import.meta.env.DEV && <RoleSwitcher />}
      </HashRouter>
    </AbilityContext.Provider>
  )
}

export default App
