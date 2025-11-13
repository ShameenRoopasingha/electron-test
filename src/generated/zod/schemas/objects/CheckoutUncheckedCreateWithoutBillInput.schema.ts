import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  price: z.number(),
  payedAmount: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CheckoutUncheckedCreateWithoutBillInputObjectSchema: z.ZodType<Prisma.CheckoutUncheckedCreateWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUncheckedCreateWithoutBillInput>;
export const CheckoutUncheckedCreateWithoutBillInputObjectZodSchema = makeSchema();
