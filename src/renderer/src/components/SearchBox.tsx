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
    <div className=" flex-col z-20 fixed w-2/6 ">
      <div className="bg-[#2C2C2C] border border-solid border-[white]  rounded-full  items-center  gap-2 p-2.5 w-full h-14 flex ">
        <div className="size-[40px] rounded-full bg-black justify-center item-center flex items-center">
          <img src={SearchIcon} alt="" srcSet="" className="size-[20px]  flex-none " />
        </div>
        <input
          type="text"
          placeholder="Search Items..."
          className="bg-transparent text-[#E0E0E0] w-full outline-none text-sm sm:text-base "
        />
      </div>
      <div className=" p-5 justify-center-safe bg-[#2c2c2cf6] mx-5  rounded-b-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ullam modi architecto quam
        eligendi facere sit rem exercitationem odio dolorem aut tenetur debitis consequuntur,
        perspiciatis impedit labore illum earum eius hic culpa soluta ratione dolor vitae?
        Doloremque illum tempore enim maxime est at, reprehenderit ut minima vel odit debitis
        cumque!
      </div>
    </div>
  )
}

const SearchBox: FC<SearchBoxProps1> = ({ classNames, children }) => {
  return (
    <div
      className={`${classNames ?? ''} flex overflow-hidden items-center justify-between gap-4 
      bg-[#161616] rounded-2xl py-2.5 px-4 
      flex-wrap md:flex-nowrap transition-all duration-500 z-50`}
    >
      {/* Left: Active */}
      <h3 className="text-white  text-3xl flex-shrink-0 px-2 w-1/4">{children}</h3>

      {/* Center: Search */}
      <div className="flex justify-center items-center md:max-w-1/2 flex-1 order-3 md:order-2">
        <Search classNames="flex content-center align-center" />
      </div>

      {/* Right: Icons */}
      <div className="flex gap-3 md:gap-4 flex-shrink-0 justify-end order-2 md:order-3 w-1/4">
        <Icon icon={Bell} />
        <Icon icon={Question} />
      </div>
    </div>
  )
}

export default SearchBox
