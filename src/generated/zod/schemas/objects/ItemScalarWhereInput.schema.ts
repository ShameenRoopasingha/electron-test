import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const itemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ItemScalarWhereInputObjectSchema), z.lazy(() => ItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ItemScalarWhereInputObjectSchema), z.lazy(() => ItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  supplierId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  barcode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  costPrice: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sellingPrice: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  quantityInStock: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reorder_level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ItemScalarWhereInputObjectSchema: z.ZodType<Prisma.ItemScalarWhereInput> = itemscalarwhereinputSchema as unknown as z.ZodType<Prisma.ItemScalarWhereInput>;
export const ItemScalarWhereInputObjectZodSchema = itemscalarwhereinputSchema;
