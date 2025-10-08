import Navbar from './components/Navbar'
import './assets/base.css'
import SearchBox from './components/SearchBox'
// import { Parent } from './components/test'
// import SearchBox from './components/SearchBox'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      {/* <SearchBox classNames="">ITEMS</SearchBox> */}

      <h1>Hello World</h1>
      <p>This text should now use your defined styles.</p>
      {/* <Parent /> */}
    </>
  )
}

export default App
