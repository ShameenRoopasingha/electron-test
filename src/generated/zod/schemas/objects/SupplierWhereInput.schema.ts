import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ItemListRelationFilterObjectSchema as ItemListRelationFilterObjectSchema } from './ItemListRelationFilter.schema';
import { RestockListRelationFilterObjectSchema as RestockListRelationFilterObjectSchema } from './RestockListRelationFilter.schema'

const supplierwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SupplierWhereInputObjectSchema), z.lazy(() => SupplierWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SupplierWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SupplierWhereInputObjectSchema), z.lazy(() => SupplierWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  company: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  address: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  items: z.lazy(() => ItemListRelationFilterObjectSchema).optional(),
  restocks: z.lazy(() => RestockListRelationFilterObjectSchema).optional()
}).strict();
export const SupplierWhereInputObjectSchema: z.ZodType<Prisma.SupplierWhereInput> = supplierwhereinputSchema as unknown as z.ZodType<Prisma.SupplierWhereInput>;
export const SupplierWhereInputObjectZodSchema = supplierwhereinputSchema;
