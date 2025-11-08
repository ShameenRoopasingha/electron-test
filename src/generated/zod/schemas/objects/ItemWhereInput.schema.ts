import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CategoryScalarRelationFilterObjectSchema as CategoryScalarRelationFilterObjectSchema } from './CategoryScalarRelationFilter.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { SupplierScalarRelationFilterObjectSchema as SupplierScalarRelationFilterObjectSchema } from './SupplierScalarRelationFilter.schema';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema';
import { CheckoutListRelationFilterObjectSchema as CheckoutListRelationFilterObjectSchema } from './CheckoutListRelationFilter.schema';
import { ReturnedOrderListRelationFilterObjectSchema as ReturnedOrderListRelationFilterObjectSchema } from './ReturnedOrderListRelationFilter.schema';
import { DefectListRelationFilterObjectSchema as DefectListRelationFilterObjectSchema } from './DefectListRelationFilter.schema';
import { ExpiredItemListRelationFilterObjectSchema as ExpiredItemListRelationFilterObjectSchema } from './ExpiredItemListRelationFilter.schema';
import { RestockItemListRelationFilterObjectSchema as RestockItemListRelationFilterObjectSchema } from './RestockItemListRelationFilter.schema'

const itemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ItemWhereInputObjectSchema), z.lazy(() => ItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ItemWhereInputObjectSchema), z.lazy(() => ItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  supplierId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  barcode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  costPrice: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sellingPrice: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  quantityInStock: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reorder_level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  category: z.union([z.lazy(() => CategoryScalarRelationFilterObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  supplier: z.union([z.lazy(() => SupplierScalarRelationFilterObjectSchema), z.lazy(() => SupplierWhereInputObjectSchema)]).optional(),
  checkouts: z.lazy(() => CheckoutListRelationFilterObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderListRelationFilterObjectSchema).optional(),
  defects: z.lazy(() => DefectListRelationFilterObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemListRelationFilterObjectSchema).optional(),
  restockItems: z.lazy(() => RestockItemListRelationFilterObjectSchema).optional()
}).strict();
export const ItemWhereInputObjectSchema: z.ZodType<Prisma.ItemWhereInput> = itemwhereinputSchema as unknown as z.ZodType<Prisma.ItemWhereInput>;
export const ItemWhereInputObjectZodSchema = itemwhereinputSchema;
