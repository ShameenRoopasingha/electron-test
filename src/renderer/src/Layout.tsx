import React, { useState, FC } from 'react'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
import { useAppSelector } from './redux/hooks'
import Container from './components/Container'

interface LayoutProps {
  classNames?: string
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children, classNames }) => {
  const [active, setActive] = useState('SALES')

  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <Navbar active={active} onSelect={setActive} />

      {/* Main content */}
      <main
        className={`${classNames ? classNames : ''} flex-1 p-6 flex-col text-white overflow-y-auto`}
      >
        <div className="w-[80.9vw] group">
          <SearchBox classNames="">{active}</SearchBox>
          <Container classNames="group-width">{children}</Container>
        </div>

      </main>
    </div>
  )
}

export default Layout
