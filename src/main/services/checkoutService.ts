import { validate } from '../../../lib/validate'
import { getPrisma } from '../../../lib/utils'
import { CheckoutInputSchema, CheckoutResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
const prisma = getPrisma()
export const BaseCheckoutInput = CheckoutInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  bill: true,
  item: true
})
export type BaseCheckoutInputType = z.infer<typeof BaseCheckoutInput>
export const BaseCheckoutResult = CheckoutResultSchema.omit({
  bill: true,
  item: true
})
export type BaseCheckoutResultType = z.infer<typeof BaseCheckoutResult>
export const createCheckout = async (
  data: BaseCheckoutInputType
): Promise<BaseCheckoutResultType> => {
  const validatedData = validate(BaseCheckoutInput, data)
  const checkout = await prisma.checkout.create({
    data: {
      billId: validatedData.billId,
      itemId: validatedData.itemId,
      quantity: validatedData.quantity,
      price: validatedData.price,
      payedAmount: validatedData.payedAmount
    }
  })
  return BaseCheckoutResult.parse(checkout)
}
export const getCheckoutById = async (id: number): Promise<BaseCheckoutResultType> => {
  const checkoutById = await prisma.checkout.findUnique({
    where: { id }
  })
  if (!checkoutById) {
    throw new Error('Checkout not found')
  }
  return BaseCheckoutResult.parse(checkoutById)
}
export const getAllCheckouts = async (): Promise<BaseCheckoutResultType[]> => {
  const checkouts = await prisma.checkout.findMany()
  return checkouts.map((checkout) => BaseCheckoutResult.parse(checkout))
}
export const updateCheckout = async (
  id: number,
  data: Partial<BaseCheckoutInputType>
): Promise<BaseCheckoutResultType> => {
  const validatedData = BaseCheckoutInput.partial().parse(data)
  const updatedCheckout = await prisma.checkout.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseCheckoutResult.parse(updatedCheckout)
}
export const deleteCheckout = async (id: number): Promise<void> => {
  await prisma.checkout.delete({
    where: { id }
  })
}
