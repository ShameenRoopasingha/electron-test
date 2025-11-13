import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

const restockitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RestockItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RestockItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RestockItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RestockItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RestockItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  restockId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  costPrice: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
export const RestockItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RestockItemScalarWhereWithAggregatesInput> = restockitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RestockItemScalarWhereWithAggregatesInput>;
export const RestockItemScalarWhereWithAggregatesInputObjectZodSchema = restockitemscalarwherewithaggregatesinputSchema;
