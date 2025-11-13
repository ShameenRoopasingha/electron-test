import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const restockscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RestockScalarWhereInputObjectSchema), z.lazy(() => RestockScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RestockScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RestockScalarWhereInputObjectSchema), z.lazy(() => RestockScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  supplierId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalCost: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RestockScalarWhereInputObjectSchema: z.ZodType<Prisma.RestockScalarWhereInput> = restockscalarwhereinputSchema as unknown as z.ZodType<Prisma.RestockScalarWhereInput>;
export const RestockScalarWhereInputObjectZodSchema = restockscalarwhereinputSchema;
