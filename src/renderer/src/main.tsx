import './assets/main.css'
import './assets/base.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import CompStore from './redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={CompStore}>
      <App />
    </Provider>
  </StrictMode>
)
