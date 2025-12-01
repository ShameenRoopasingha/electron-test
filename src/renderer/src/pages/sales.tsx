import { FC } from 'react'

const Sales: FC = () => {
  return (
    <div className="w-full gap-5 flex h-full">
      <div className="w-4/12 h-1/6 bg-amber-100  rounded-2xl p-3 default-black">
        <div className="body-xl  !font-semibold">Customer Name</div>
        <h2 className="">Sample Customer</h2>
      </div>
      <div className="w-4/12 h-1/6 bg-amber-100  rounded-2xl p-3 default">
        <div className="body-xl  !font-semibold  h-fit">Invoice Price</div>
        <div className="flex h-1/2 ">
          <div className="!font-semibold  w-fit align-bottom flex pt-8">LKR</div>
          <h2 className="w-full text-start  align-bottom flex ">1060.00</h2>
        </div>
      </div>
      <div className="w-4/12 h-1/6 bg-amber-100  rounded-2xl p-3 default">
        <div className="body-xl  w-full flex justify-between">
          <div className="body-xl w-1/2 !font-semibold">Discount</div>
          <div className="body-xl w-1/2  text-start !font-semibold">4</div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Sales
