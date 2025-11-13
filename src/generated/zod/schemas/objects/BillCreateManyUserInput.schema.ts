import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  customerId: z.number().int(),
  totalAmount: z.number(),
  paymentMethod: z.string(),
  paymentStatus: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BillCreateManyUserInputObjectSchema: z.ZodType<Prisma.BillCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateManyUserInput>;
export const BillCreateManyUserInputObjectZodSchema = makeSchema();
