import React, { type FC, ReactNode } from 'react'

interface BtnProps {
  click?: () => void
  color: 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'default' | 'default-black'
  classNames?: string
  children: ReactNode // ✅ correct property name
  icon?: string // ✅ optional icon property
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
}

const Btn: FC<BtnProps> = ({ click, color, classNames, children, icon, onFocus, onBlur }) => {
  return (
    <div
      className={`btn ${color} ${classNames ?? ''} h-[50px]  text-black rounded-full btn w-[200px]  `} // ✅ properly using props
      onClick={click}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0}
    >
      {icon ? <img src={icon} className="icon size-8" /> : null}{' '}
      {/* ✅ conditionally render icon if provided */}
      {children} {/* ✅ render children correctly */}
    </div>
  )
}

export default Btn
