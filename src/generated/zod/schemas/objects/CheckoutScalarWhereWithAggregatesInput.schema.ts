import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const checkoutscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CheckoutScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CheckoutScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CheckoutScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CheckoutScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CheckoutScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  payedAmount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CheckoutScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CheckoutScalarWhereWithAggregatesInput> = checkoutscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CheckoutScalarWhereWithAggregatesInput>;
export const CheckoutScalarWhereWithAggregatesInputObjectZodSchema = checkoutscalarwherewithaggregatesinputSchema;
