import './assets/main.css'
import './assets/base.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Layout from './Layout'
import { Provider } from 'react-redux'
import CompStore from './redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={CompStore}>
      <div className=" content-center items-center justify-center flex h-screen w-screen">
        <Layout classNames="w-screen h-screen ">
          <App />
        </Layout>
      </div>
    </Provider>
  </StrictMode>
)
