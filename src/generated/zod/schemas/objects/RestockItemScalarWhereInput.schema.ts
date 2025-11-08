import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema'

const restockitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RestockItemScalarWhereInputObjectSchema), z.lazy(() => RestockItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RestockItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RestockItemScalarWhereInputObjectSchema), z.lazy(() => RestockItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  restockId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  costPrice: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional()
}).strict();
export const RestockItemScalarWhereInputObjectSchema: z.ZodType<Prisma.RestockItemScalarWhereInput> = restockitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.RestockItemScalarWhereInput>;
export const RestockItemScalarWhereInputObjectZodSchema = restockitemscalarwhereinputSchema;
