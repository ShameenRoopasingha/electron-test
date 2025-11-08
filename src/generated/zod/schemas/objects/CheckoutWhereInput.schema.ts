import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BillScalarRelationFilterObjectSchema as BillScalarRelationFilterObjectSchema } from './BillScalarRelationFilter.schema';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema';
import { ItemScalarRelationFilterObjectSchema as ItemScalarRelationFilterObjectSchema } from './ItemScalarRelationFilter.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const checkoutwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CheckoutWhereInputObjectSchema), z.lazy(() => CheckoutWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CheckoutWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CheckoutWhereInputObjectSchema), z.lazy(() => CheckoutWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  itemId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  payedAmount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bill: z.union([z.lazy(() => BillScalarRelationFilterObjectSchema), z.lazy(() => BillWhereInputObjectSchema)]).optional(),
  item: z.union([z.lazy(() => ItemScalarRelationFilterObjectSchema), z.lazy(() => ItemWhereInputObjectSchema)]).optional()
}).strict();
export const CheckoutWhereInputObjectSchema: z.ZodType<Prisma.CheckoutWhereInput> = checkoutwhereinputSchema as unknown as z.ZodType<Prisma.CheckoutWhereInput>;
export const CheckoutWhereInputObjectZodSchema = checkoutwhereinputSchema;
