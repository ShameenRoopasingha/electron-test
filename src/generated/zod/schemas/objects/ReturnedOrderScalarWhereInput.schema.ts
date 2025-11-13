import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const returnedorderscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema), z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema), z.lazy(() => ReturnedOrderScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  billId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  itemId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReturnedOrderScalarWhereInputObjectSchema: z.ZodType<Prisma.ReturnedOrderScalarWhereInput> = returnedorderscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReturnedOrderScalarWhereInput>;
export const ReturnedOrderScalarWhereInputObjectZodSchema = returnedorderscalarwhereinputSchema;
