import React, { FC } from 'react'
import logo from '../assets/ichorbit.png'
import sale from '../assets/icons/sale.png'
import items from '../assets/icons/medicine (2).png'
import dahboard from '../assets/icons/dashboard (3).png'
import customers from '../assets/icons/handshake (2).png'
import users from '../assets/icons/user (2).png'
import suppliers from '../assets/icons/delivery-man.png'
import reports from '../assets/icons/report (2).png'
import profile from '../assets/icons/user (1).png'
import { useAppDispatch, useAppSelector } from '@renderer/redux/hooks'
import { setPage } from '@renderer/redux/slices/pageSlice'

interface SidebarProps {
  active?: string
  onSelect?: (key: string) => void
}

const Navbar: FC<SidebarProps> = ({ active, onSelect }) => {
  //   const page = useAppSelector((state) => state.page.currentPage)
  const dispatch = useAppDispatch()

  // Menu items config (reusable)
  const menuItems: { key: string; label: string; icon: string }[] = [
    { key: 'SALES', label: 'SALES', icon: sale },
    { key: 'ITEMS', label: 'ITEMS', icon: items },
    { key: 'DASHBOARD', label: 'DASHBOARD', icon: dahboard },
    { key: 'CUSTOMERS', label: 'CUSTOMERS', icon: customers },
    { key: 'USERS', label: 'USERS', icon: users },
    { key: 'SUPPLIERS', label: 'SUPPLIERS', icon: suppliers },
    { key: 'REPORTS', label: 'REPORTS', icon: reports }
  ]

  return (
    <aside className="h-screen w-80 bg-[#161616] ml-80 text-white flex flex-col justify-between px-5 border-solid border-r border-[#E0E0E0] items-center">
      {/* Top Section */}
      <div>
        {/* Pharmacy Name */}
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-lg font-bold leading-tight">New Union Pharmacy</h1>
        </div>

        {/* User */}
        <div className="flex flex-col items-center py-6 border-b border-gray-800">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
            <img src={profile} alt="" />
          </div>
          <p className="mt-2 text-sm font-bold">Admin</p>
          <p className="font-semibold">Username</p>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 mt-4 px-2 h-[550px] justify-between">
          {menuItems.map((item) => {
            const isActive = active === item.key
            return (
              <div key={item.key}>
                <button
                  onClick={() => {
                    onSelect && onSelect(item.key)
                    dispatch(setPage(item.label))
                  }}
                  className={`flex justify-between items-center gap-2 w-full px-3 py-3 rounded-lg text-sm font-semibold transition 
                      ${isActive ? 'bg-[#0c0c0c] hover:bg-[#383838] text-white' : 'text-gray-400 hover:bg-[#383838] hover:text-white'}
                    `}
                >
                  <div
                    className={`size-fit  rounded-md flex justify-center items-center 
                      ${isActive ? 'bg-white text-black' : 'bg-[#161616] text-white'}`}
                  >
                    <span className="p-2">
                      <img className={`${isActive ? '' : ''} size-8 `} src={item.icon} alt="" />
                    </span>
                  </div>
                  <h6 className={`${isActive ? 'text-white' : 'text-[#777777]'} font-semibold`}>
                    {item.label}
                  </h6>
                </button>
              </div>
            )
          })}
        </nav>
      </div>

      {/* Footer Logo */}
      <div className="p-4 border-t border-gray-800 text-center text-sm opacity-60 w-[225px] content-center items-center justify-center flex">
        <img src={logo} alt="logo" className="size-15" />
      </div>
    </aside>
  )
}

export default Navbar
