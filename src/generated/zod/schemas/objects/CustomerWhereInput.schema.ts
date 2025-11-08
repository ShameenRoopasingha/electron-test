import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BillListRelationFilterObjectSchema as BillListRelationFilterObjectSchema } from './BillListRelationFilter.schema'

const customerwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerWhereInputObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerWhereInputObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  address: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bills: z.lazy(() => BillListRelationFilterObjectSchema).optional()
}).strict();
export const CustomerWhereInputObjectSchema: z.ZodType<Prisma.CustomerWhereInput> = customerwhereinputSchema as unknown as z.ZodType<Prisma.CustomerWhereInput>;
export const CustomerWhereInputObjectZodSchema = customerwhereinputSchema;
