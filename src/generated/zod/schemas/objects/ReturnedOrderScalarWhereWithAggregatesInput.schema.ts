import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const returnedorderscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReturnedOrderScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReturnedOrderScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReturnedOrderScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReturnedOrderScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReturnedOrderScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  itemId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReturnedOrderScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReturnedOrderScalarWhereWithAggregatesInput> = returnedorderscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReturnedOrderScalarWhereWithAggregatesInput>;
export const ReturnedOrderScalarWhereWithAggregatesInputObjectZodSchema = returnedorderscalarwherewithaggregatesinputSchema;
