import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  supplierId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RestockCreateManyUserInputObjectSchema: z.ZodType<Prisma.RestockCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateManyUserInput>;
export const RestockCreateManyUserInputObjectZodSchema = makeSchema();
