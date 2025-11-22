import { ReactElement } from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import { appRoutes } from './routes'
import Layout from './Layout'
import { RBACProvider } from '@compugit/react-rbac'

function RoutesWrapper(): ReactElement | null {
  const routes = useRoutes(appRoutes)
  return routes
}

function App(): ReactElement {
  return (
    // <RBACProvider roles={roles} userRole={currentUserRole}>
    <HashRouter>
      <Layout>
        <RoutesWrapper />
      </Layout>
    </HashRouter>
    // </RBACProvider>
  )
}

export default App
