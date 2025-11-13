import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SupplierScalarRelationFilterObjectSchema as SupplierScalarRelationFilterObjectSchema } from './SupplierScalarRelationFilter.schema';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema';
import { RestockItemListRelationFilterObjectSchema as RestockItemListRelationFilterObjectSchema } from './RestockItemListRelationFilter.schema'

const restockwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RestockWhereInputObjectSchema), z.lazy(() => RestockWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RestockWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RestockWhereInputObjectSchema), z.lazy(() => RestockWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  supplierId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalCost: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  supplier: z.union([z.lazy(() => SupplierScalarRelationFilterObjectSchema), z.lazy(() => SupplierWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => RestockItemListRelationFilterObjectSchema).optional()
}).strict();
export const RestockWhereInputObjectSchema: z.ZodType<Prisma.RestockWhereInput> = restockwhereinputSchema as unknown as z.ZodType<Prisma.RestockWhereInput>;
export const RestockWhereInputObjectZodSchema = restockwhereinputSchema;
