import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryCreateNestedOneWithoutItemsInputObjectSchema as CategoryCreateNestedOneWithoutItemsInputObjectSchema } from './CategoryCreateNestedOneWithoutItemsInput.schema';
import { SupplierCreateNestedOneWithoutItemsInputObjectSchema as SupplierCreateNestedOneWithoutItemsInputObjectSchema } from './SupplierCreateNestedOneWithoutItemsInput.schema';
import { CheckoutCreateNestedManyWithoutItemInputObjectSchema as CheckoutCreateNestedManyWithoutItemInputObjectSchema } from './CheckoutCreateNestedManyWithoutItemInput.schema';
import { DefectCreateNestedManyWithoutItemInputObjectSchema as DefectCreateNestedManyWithoutItemInputObjectSchema } from './DefectCreateNestedManyWithoutItemInput.schema';
import { ExpiredItemCreateNestedManyWithoutItemInputObjectSchema as ExpiredItemCreateNestedManyWithoutItemInputObjectSchema } from './ExpiredItemCreateNestedManyWithoutItemInput.schema';
import { RestockItemCreateNestedManyWithoutItemInputObjectSchema as RestockItemCreateNestedManyWithoutItemInputObjectSchema } from './RestockItemCreateNestedManyWithoutItemInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  barcode: z.string(),
  costPrice: z.number(),
  sellingPrice: z.number(),
  quantityInStock: z.number().int(),
  reorder_level: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutItemsInputObjectSchema),
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutItemsInputObjectSchema),
  checkouts: z.lazy(() => CheckoutCreateNestedManyWithoutItemInputObjectSchema).optional(),
  defects: z.lazy(() => DefectCreateNestedManyWithoutItemInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemCreateNestedManyWithoutItemInputObjectSchema).optional(),
  restockItems: z.lazy(() => RestockItemCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemCreateWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.ItemCreateWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateWithoutReturnedOrdersInput>;
export const ItemCreateWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
