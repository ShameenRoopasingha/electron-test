import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  supplierId: z.number().int(),
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RestockUncheckedCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.RestockUncheckedCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUncheckedCreateWithoutItemsInput>;
export const RestockUncheckedCreateWithoutItemsInputObjectZodSchema = makeSchema();
