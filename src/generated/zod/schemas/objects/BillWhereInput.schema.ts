import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CustomerScalarRelationFilterObjectSchema as CustomerScalarRelationFilterObjectSchema } from './CustomerScalarRelationFilter.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CheckoutListRelationFilterObjectSchema as CheckoutListRelationFilterObjectSchema } from './CheckoutListRelationFilter.schema';
import { ReturnedOrderListRelationFilterObjectSchema as ReturnedOrderListRelationFilterObjectSchema } from './ReturnedOrderListRelationFilter.schema'

const billwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BillWhereInputObjectSchema), z.lazy(() => BillWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BillWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BillWhereInputObjectSchema), z.lazy(() => BillWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  customerId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalAmount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  paymentMethod: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  paymentStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  customer: z.union([z.lazy(() => CustomerScalarRelationFilterObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  checkouts: z.lazy(() => CheckoutListRelationFilterObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderListRelationFilterObjectSchema).optional()
}).strict();
export const BillWhereInputObjectSchema: z.ZodType<Prisma.BillWhereInput> = billwhereinputSchema as unknown as z.ZodType<Prisma.BillWhereInput>;
export const BillWhereInputObjectZodSchema = billwhereinputSchema;
