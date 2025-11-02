import { type FC, ReactNode } from 'react'
import SearchIcon from '../assets/icons/loupe2.png'
import Bell from '../assets/icons/bell.png'
import Question from '../assets/icons/question.png'
import '../assets/base.css'
import Icon from './icon'

interface SearchBoxProps1 {
  children?: ReactNode
  classNames?: string
}
interface SearchBoxProps2 {
  classNames?: string
}

const Search: FC<SearchBoxProps2> = () => {
  return (
    <>
      <div className="bg-[#2C2C2C] rounded-full  items-center  gap-2 p-2.5 w-full  ">
        <div className="size-[35px] rounded-full bg-black justify-center item-center flex items-center">
          <img src={SearchIcon} alt="" srcSet="" className="size-[20px]  flex-none " />
        </div>
        <input
          type="text"
          placeholder="Search Items..."
          className="bg-transparent text-[#E0E0E0] w-full outline-none text-sm sm:text-base "
        />
      </div>
    </>
  )
}

const SearchBox: FC<SearchBoxProps1> = ({ classNames, children }) => {
  return (
    <div
      className={`${classNames ?? ''} flex items-center justify-between gap-4 
      bg-[#161616] rounded-2xl py-2.5 px-4 
      flex-wrap md:flex-nowrap transition-all duration-500`}
    >
      {/* Left: Active */}
      <h1 className="text-white font-extrabold text-3xl flex-shrink-0 px-2">{children}</h1>

      {/* Center: Search */}
      <div className="flex justify-center items-center w-full md:max-w-[800px] flex-1 order-3 md:order-2">
        <Search classNames="flex content-center align-center" />
      </div>

      {/* Right: Icons */}
      <div className="flex gap-3 md:gap-4 flex-shrink-0 justify-end order-2 md:order-3">
        <Icon icon={Bell} />
        <Icon icon={Question} />
      </div>
    </div>
  )
}

export default SearchBox
