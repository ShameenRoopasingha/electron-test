import { type FC, ReactNode } from 'react'

interface BtnProps {
  click?: () => void
  color: 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'default'
  classNames?: string
  children: ReactNode // ✅ correct property name
  icon?: string // ✅ optional icon property
}

const Btn: FC<BtnProps> = ({ click, color, classNames, children, icon }) => {
  return (
    <div
      className={`btn ${color} ${classNames ?? ''} h-[50px] align-middle text-middle text-black rounded-md btn w-[150px]`} // ✅ properly using props
      onClick={click}
    >
      {icon ? <img src={icon} className="w-5 mr-2" /> : null}{' '}
      {/* ✅ conditionally render icon if provided */}
      {children} {/* ✅ render children correctly */}
    </div>
  )
}

export default Btn
