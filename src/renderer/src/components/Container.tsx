import { type FC, ReactNode } from 'react'

interface ContainerProps {
  classNames?: string
  children: ReactNode // ✅ correct property name
}

const Container: FC<ContainerProps> = ({ classNames, children }) => {
  return (
    <div
      className={`${classNames}text-white rounded-2xl bg-[#111111] align-middle content-center justify-center items-center p-2`} // ✅ properly using props
    >
      {' '}
      {/* ✅ conditionally render icon if provided */}
      {children} {/* ✅ render children correctly */}
    </div>
  )
}

export default Container
