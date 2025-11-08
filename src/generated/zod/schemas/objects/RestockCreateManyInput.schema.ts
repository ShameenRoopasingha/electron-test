import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  supplierId: z.number().int(),
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RestockCreateManyInputObjectSchema: z.ZodType<Prisma.RestockCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateManyInput>;
export const RestockCreateManyInputObjectZodSchema = makeSchema();
