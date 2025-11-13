import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  restockId: z.number().int(),
  quantity: z.number().int(),
  costPrice: z.number()
}).strict();
export const RestockItemCreateManyItemInputObjectSchema: z.ZodType<Prisma.RestockItemCreateManyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateManyItemInput>;
export const RestockItemCreateManyItemInputObjectZodSchema = makeSchema();
