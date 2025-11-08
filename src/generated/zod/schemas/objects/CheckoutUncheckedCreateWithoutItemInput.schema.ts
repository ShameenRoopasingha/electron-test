import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  billId: z.number().int(),
  quantity: z.number().int(),
  price: z.number(),
  payedAmount: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CheckoutUncheckedCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.CheckoutUncheckedCreateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUncheckedCreateWithoutItemInput>;
export const CheckoutUncheckedCreateWithoutItemInputObjectZodSchema = makeSchema();
