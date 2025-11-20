import { getPrisma } from '../../../lib/utils'
import { BillInputSchema, BillResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'
import { validate } from '../../../lib/validate'

const prisma = getPrisma()
export const BaseBillInput = BillInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  user: true,
  customer: true,
  checkouts: true,
  returnedOrders: true
})
export type BaseBillInputType = z.infer<typeof BaseBillInput>
export const BaseBillResult = BillResultSchema.omit({
  user: true,
  customer: true,
  checkouts: true,
  returnedOrders: true
})
export type BaseBillResultType = z.infer<typeof BaseBillResult>
export const createBill = async (data: BaseBillInputType): Promise<BaseBillResultType> => {
  const validatedData = validate(BaseBillInput,data);
  const bill = await prisma.bill.create({
    data: {
      userId: validatedData.userId,
      customerId: validatedData.customerId,
      totalAmount: validatedData.totalAmount,
      paymentMethod: validatedData.paymentMethod,
      paymentStatus: validatedData.paymentStatus
    }
  })
  return BaseBillResult.parse(bill)
}
export const getBillById = async (id: number): Promise<BaseBillResultType> => {
  const billById = await prisma.bill.findUnique({
    where: { id }
  })
  if (!billById) {
    throw new Error('Bill not found')
  }
  return BaseBillResult.parse(billById)
}
export const getAllBills = async (): Promise<BaseBillResultType[]> => {
  const bills = await prisma.bill.findMany()
  return bills.map((bill) => BaseBillResult.parse(bill))
}
export const updateBill = async (
  id: number,
  data: Partial<BaseBillInputType>
): Promise<BaseBillResultType> => {
  const validatedData = BaseBillInput.partial().parse(data)
  const updatedBill = await prisma.bill.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseBillResult.parse(updatedBill)
}
export const deleteBill = async (id: number): Promise<void> => {
  await prisma.bill.delete({
    where: { id }
  })
}
