import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const billscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BillScalarWhereInputObjectSchema), z.lazy(() => BillScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BillScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BillScalarWhereInputObjectSchema), z.lazy(() => BillScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  customerId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalAmount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  paymentMethod: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  paymentStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BillScalarWhereInputObjectSchema: z.ZodType<Prisma.BillScalarWhereInput> = billscalarwhereinputSchema as unknown as z.ZodType<Prisma.BillScalarWhereInput>;
export const BillScalarWhereInputObjectZodSchema = billscalarwhereinputSchema;
