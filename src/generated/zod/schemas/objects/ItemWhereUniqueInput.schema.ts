import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  barcode: z.string().optional()
}).strict();
export const ItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.ItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemWhereUniqueInput>;
export const ItemWhereUniqueInputObjectZodSchema = makeSchema();
