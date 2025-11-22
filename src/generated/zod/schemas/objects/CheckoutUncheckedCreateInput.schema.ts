import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  billId: z.number().int(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  price: z.number(),
  payedAmount: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CheckoutUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CheckoutUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUncheckedCreateInput>;
export const CheckoutUncheckedCreateInputObjectZodSchema = makeSchema();
