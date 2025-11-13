import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const billscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BillScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BillScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BillScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BillScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BillScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  customerId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  totalAmount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  paymentMethod: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  paymentStatus: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BillScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BillScalarWhereWithAggregatesInput> = billscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BillScalarWhereWithAggregatesInput>;
export const BillScalarWhereWithAggregatesInputObjectZodSchema = billscalarwherewithaggregatesinputSchema;
