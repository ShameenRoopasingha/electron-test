import { type FC, } from 'react'

interface IconProps {
  click?: () => void
  //   color?: 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'default'
  classNames?: string
  icon?: string // ✅ optional icon property
}

const Icon: FC<IconProps> = ({
  click,
  // color,
  classNames,
  icon
}) => {
  return (
    <button onClick={click} className={`${classNames ?? ''} bg-none border-none size-fit cursor-pointer`}>
      <img src={icon} alt="" className="size-[30px]" />
    </button>
  )
}

export default Icon
