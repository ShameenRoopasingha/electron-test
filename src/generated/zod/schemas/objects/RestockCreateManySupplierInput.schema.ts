import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RestockCreateManySupplierInputObjectSchema: z.ZodType<Prisma.RestockCreateManySupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateManySupplierInput>;
export const RestockCreateManySupplierInputObjectZodSchema = makeSchema();
