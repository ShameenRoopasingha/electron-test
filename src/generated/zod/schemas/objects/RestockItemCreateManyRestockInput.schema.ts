import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  itemId: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  costPrice: z.number()
}).strict();
export const RestockItemCreateManyRestockInputObjectSchema: z.ZodType<Prisma.RestockItemCreateManyRestockInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateManyRestockInput>;
export const RestockItemCreateManyRestockInputObjectZodSchema = makeSchema();
