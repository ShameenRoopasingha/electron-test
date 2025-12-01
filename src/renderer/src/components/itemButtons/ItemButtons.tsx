import Btn from '@renderer/components/Btn'
import Container from '@renderer/components/Container'
import { FC, ReactNode, useState, useEffect } from 'react'
import items from '@renderer/assets/icons/list-text.png'
import restock from '@renderer/assets/icons/reorder.png'
import expired from '@renderer/assets/icons/expired_.png'
import damaged from '@renderer/assets/icons/broken.png'
import { useNavigate, useLocation } from 'react-router-dom'

export const ItemButtons: FC<{ children?: ReactNode }> = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const buttons = [
    { label: 'Input Items', icon: items, path: 'input-items' },
    { label: 'Restock Items', icon: restock, path: 'restock-items' },
    { label: 'Expired Items', icon: expired, path: 'expired-items' },
    { label: 'Damaged Items', icon: damaged, path: 'damaged-items' }
  ]

  const [activeButton, setActiveButton] = useState('')

  // Detect active button based on URL
  useEffect(() => {
    const lastPart = pathname.split('/').pop() || 'input-items'
    setActiveButton(lastPart)
  }, [pathname])

  return (
    <div className="flex flex-col gap-8 w-full">
      <Container classNames="flex flex-row h-fit bg-[#111111] py-10 gap-4">
        {buttons.map((btn) => (
          <Btn
            key={btn.label}
            icon={btn.icon}
            classNames="flex-row-reverse"
            color={activeButton === btn.path ? 'default' : 'default-black'}
            click={() => navigate(btn.path)}
          >
            {btn.label}
          </Btn>
        ))}
      </Container>
    </div>
  )
}
