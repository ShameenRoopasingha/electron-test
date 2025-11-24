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
  const [role, setRole] = useState<string | undefined>(
    localStorage.getItem('userRole') || undefined
  )

  useEffect(() => {
    const handleStorageChange = (): void => {
      setRole(localStorage.getItem('userRole') || undefined)
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const ability = defineAbilityFor(role)

  // Test component for role switching
  const RoleSwitcher = (): ReactElement => (
    <div className="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded-lg z-50">
      <h3 className="text-sm font-bold mb-2">Test Role Switcher</h3>
      <div className="flex gap-2 flex-wrap">
        {['owner', 'admin', 'cashier', 'seller'].map((testRole) => (
          <button
            key={testRole}
            onClick={() => {
              localStorage.setItem('userRole', testRole)
              setRole(testRole)
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
            localStorage.removeItem('userRole')
            setRole(undefined)
            window.location.reload()
          }}
          className="px-3 py-1 rounded text-xs bg-red-600 hover:bg-red-500"
        >
          Clear
        </button>
      </div>
      <p className="text-xs mt-2">Current: {role || 'none'}</p>
    </div>
  )

  return (
    <AbilityContext.Provider value={ability}>
      <HashRouter>
        <Layout>
          <RoutesWrapper />
        </Layout>
        <RoleSwitcher />
      </HashRouter>
    </AbilityContext.Provider>
  )
}

export default App
