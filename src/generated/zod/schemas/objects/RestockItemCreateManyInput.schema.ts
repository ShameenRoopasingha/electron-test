import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  restockId: z.number().int(),
  itemId: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  costPrice: z.number()
}).strict();
export const RestockItemCreateManyInputObjectSchema: z.ZodType<Prisma.RestockItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateManyInput>;
export const RestockItemCreateManyInputObjectZodSchema = makeSchema();
