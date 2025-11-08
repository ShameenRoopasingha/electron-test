import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  categoryId: z.number().int(),
  barcode: z.string(),
  costPrice: z.number(),
  sellingPrice: z.number(),
  quantityInStock: z.number().int(),
  reorder_level: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ItemCreateManySupplierInputObjectSchema: z.ZodType<Prisma.ItemCreateManySupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateManySupplierInput>;
export const ItemCreateManySupplierInputObjectZodSchema = makeSchema();
