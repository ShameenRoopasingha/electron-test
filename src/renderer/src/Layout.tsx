import React, { useState, FC } from 'react'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
// import { useAppSelector } from './redux/hooks'
import Container from './components/Container'

interface LayoutProps {
  classNames?: string
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children, classNames }) => {
  const [active, setActive] = useState('SALES')

  return (
    <div className="flex w-screen h-screen bg-black overflow-hidden">
      {/* Sidebar */}
      <Navbar active={active} onSelect={setActive} />

      {/* Main content */}
      <main className={`${classNames ?? ''} p-5 h-full w-full flex flex-1`}>
        <div className="group w-full h-full w-full  flex flex-col  content-center items-center gap-5">
          <SearchBox
            classNames="
        transition-all h-fit w-full flex-1
      "
          >
            {active}
          </SearchBox>

          <Container
            classNames=" p-5 h- fit w-full flex-14
      "
          >
            {children}
          </Container>
        </div>
      </main>
    </div>
  )
}

export default Layout
