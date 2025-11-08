import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const restockscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RestockScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RestockScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RestockScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RestockScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RestockScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  supplierId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  totalCost: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RestockScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RestockScalarWhereWithAggregatesInput> = restockscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RestockScalarWhereWithAggregatesInput>;
export const RestockScalarWhereWithAggregatesInputObjectZodSchema = restockscalarwherewithaggregatesinputSchema;
