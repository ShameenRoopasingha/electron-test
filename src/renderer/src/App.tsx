import { ReactElement } from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import { appRoutes } from './routes'
import Layout from './Layout'

function RoutesWrapper(): ReactElement | null {
  const routes = useRoutes(appRoutes)
  return routes
}

function App(): ReactElement {
  return (
    <HashRouter>
      <Layout>
        <RoutesWrapper />
      </Layout>
    </HashRouter>
  )
}

export default App
