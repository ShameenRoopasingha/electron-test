import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BillNullableScalarRelationFilterObjectSchema as BillNullableScalarRelationFilterObjectSchema } from './BillNullableScalarRelationFilter.schema';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema';
import { ItemNullableScalarRelationFilterObjectSchema as ItemNullableScalarRelationFilterObjectSchema } from './ItemNullableScalarRelationFilter.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const returnedorderwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReturnedOrderWhereInputObjectSchema), z.lazy(() => ReturnedOrderWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReturnedOrderWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReturnedOrderWhereInputObjectSchema), z.lazy(() => ReturnedOrderWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  itemId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bill: z.union([z.lazy(() => BillNullableScalarRelationFilterObjectSchema), z.lazy(() => BillWhereInputObjectSchema)]).optional(),
  item: z.union([z.lazy(() => ItemNullableScalarRelationFilterObjectSchema), z.lazy(() => ItemWhereInputObjectSchema)]).optional()
}).strict();
export const ReturnedOrderWhereInputObjectSchema: z.ZodType<Prisma.ReturnedOrderWhereInput> = returnedorderwhereinputSchema as unknown as z.ZodType<Prisma.ReturnedOrderWhereInput>;
export const ReturnedOrderWhereInputObjectZodSchema = returnedorderwhereinputSchema;
