import { FC, use } from 'react'
import logo from '../assets/Dreams Forged in Code.png'
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
import { useNavigate } from 'react-router-dom'

interface SidebarProps {
  active?: string
  onSelect?: (key: string) => void
}

const Navbar: FC<SidebarProps> = ({ active, onSelect }) => {
  //   const page = useAppSelector((state) => state.page.currentPage)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // Menu items config (reusable)
  const menuItems: { key: string; label: string; icon: string; path: string }[] = [
    { key: 'SALES', label: 'SALES', icon: sale, path: '/sales' },
    { key: 'ITEMS', label: 'ITEMS', icon: items, path: '/items' },
    { key: 'DASHBOARD', label: 'DASHBOARD', icon: dahboard, path: '/dashboard' },
    { key: 'CUSTOMERS', label: 'CUSTOMERS', icon: customers, path: '/customers' },
    { key: 'USERS', label: 'USERS', icon: users, path: '/users' },
    { key: 'SUPPLIERS', label: 'SUPPLIERS', icon: suppliers, path: '/suppliers' },
    { key: 'REPORTS', label: 'REPORTS', icon: reports, path: '/reports' }
  ]

  return (
    <aside className="h-[100vh] w-80  bg-[#161616]  text-white flex flex-col justify-between border-solid border-none  items-center rounded-r-2xl">
      {/* Top Section */}
      <div className="w-full ">
        {/* Pharmacy Name */}
        <div className="p-4 border-b border-gray-800 h-1/12">
          <h1 className="text-lg text-center font-bold leading-tight">Nexus POS & IMS</h1>
        </div>

        {/* User */}
        <div className="flex flex-col flex-1 items-center py-6 border-b border-gray-800 3/12">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
            <img src={profile} alt="" />
          </div>
          <p className="mt-2 flex-1 text-sm font-bold">Admin</p>
          <p className="font-semibold flex-1">Username</p>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 mt-4  px-2 h-fit justify-between h-7/12">
          {menuItems.map((item) => {
            const isActive = active === item.key
            return (
              <div key={item.key} className="h-1/7">
                <button
                  onClick={() => {
                    onSelect && onSelect(item.key)
                    dispatch(setPage(item.label))
                    navigate(item.path)
                  }}
                  className={`group flex justify-between items-center gap-2 w-full px-3 py-3 rounded-lg text-sm font-semibold transition text-gray-400 focus:bg-[#0c0c0c] focus:text-white hover:bg-[#383838] hover:text-white
                      
                    `}
                >
                  <div className="size-fit  rounded-md flex justify-center items-center bg-[#161616] text-gray-400  group-focus:bg-white group-focus:text-white">
                    <span className="p-2 ">
                      <img className="`${isActive ? '' : ''} size-8 `" src={item.icon} alt="" />
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
      <div className="mt-6  border-t border-gray-800 text-center text-sm opacity-60 w-[225px] h-2/12 content-center items-center justify-center flex">
        <img src={logo} alt="logo" className="size-15" />
      </div>
    </aside>
  )
}

export default Navbar
