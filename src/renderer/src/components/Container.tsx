import { type FC, ReactNode } from 'react'

interface ContainerProps {
  classNames?: string
  children: ReactNode // ✅ correct property name
}

const Container: FC<ContainerProps> = ({ classNames, children }) => {
  const fullClassName = `${classNames} text-white rounded-2xl  align-middle content-center justify-center items-center p-2`;
  console.log('Container className:', fullClassName);
  return (
    <div
      className={fullClassName} // ✅ properly using props
    >
      {' '}
      {/* ✅ conditionally render icon if provided */}
      {children} {/* ✅ render children correctly */}
    </div>
  )
}

export default Container
