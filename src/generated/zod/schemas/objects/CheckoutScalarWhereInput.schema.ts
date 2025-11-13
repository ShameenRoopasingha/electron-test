import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const checkoutscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CheckoutScalarWhereInputObjectSchema), z.lazy(() => CheckoutScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CheckoutScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CheckoutScalarWhereInputObjectSchema), z.lazy(() => CheckoutScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  payedAmount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CheckoutScalarWhereInputObjectSchema: z.ZodType<Prisma.CheckoutScalarWhereInput> = checkoutscalarwhereinputSchema as unknown as z.ZodType<Prisma.CheckoutScalarWhereInput>;
export const CheckoutScalarWhereInputObjectZodSchema = checkoutscalarwhereinputSchema;
