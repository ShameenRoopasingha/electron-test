import { Outlet } from 'react-router-dom'
import { ItemButtons } from '@renderer/components/itemButtons/ItemButtons'
import { FC } from 'react'
import Container from '@renderer/components/Container'

export const ItemPage: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-8 w-full">
        {/* E / F / G buttons */}
        <ItemButtons />

        {/* Dynamic Body */}
        <Container classNames="w-full h-full bg-[#111111]">
          <Outlet />
        </Container>
      </div>
    </>
  )
}
