import React, { useState, FC } from 'react'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
import { useAppSelector } from './redux/hooks'

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
      <main className={`${classNames ? classNames : ''} flex-1 p-6  text-white overflow-y-auto`}>
        <SearchBox classNames="w-[80.9vw]">{active}</SearchBox>
        {children}
      </main>
    </div>
  )
}

export default Layout
