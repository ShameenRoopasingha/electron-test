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
      <div className="bg-[#2C2C2C] rounded-full flex content-center align-middle items-center gap-2 p-2.5 w-[40vw] shrink-0 ">
        <div className="size-[35px] center rounded-full bg-black align-middle content-center justify-center flex items-center">
          <img src={SearchIcon} alt="" srcSet="" className="size-[20px]  flex-none " />
        </div>
        <input
          type="text"
          placeholder="Search Items..."
          className="bg-none text-[#E0E0E0] rounded-md  w-full outline-none flex-1 "
        />
      </div>
    </>
  )
}

const SearchBox: FC<SearchBoxProps1> = ({ classNames, children }) => {
  return (
    <div
      className={`${classNames ?? ''} grid grid-cols-3 items-center bg-[#161616] rounded-2xl py-2.5`}
    >
      {/* Left: Active */}
      <h1 className="px-5 justify-self-start">{children}</h1>

      {/* Center: Search */}
      <div className="justify-self-center w-[800px] ">
        <Search classNames="" />
      </div>

      {/* Right: Icons */}
      <div className="flex gap-4 px-4 justify-self-end">
        <Icon icon={Bell} />
        <Icon icon={Question} />
      </div>
    </div>
  )
}

export default SearchBox
