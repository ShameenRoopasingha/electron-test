import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryCreateNestedOneWithoutItemsInputObjectSchema as CategoryCreateNestedOneWithoutItemsInputObjectSchema } from './CategoryCreateNestedOneWithoutItemsInput.schema';
import { SupplierCreateNestedOneWithoutItemsInputObjectSchema as SupplierCreateNestedOneWithoutItemsInputObjectSchema } from './SupplierCreateNestedOneWithoutItemsInput.schema';
import { CheckoutCreateNestedManyWithoutItemInputObjectSchema as CheckoutCreateNestedManyWithoutItemInputObjectSchema } from './CheckoutCreateNestedManyWithoutItemInput.schema';
import { ReturnedOrderCreateNestedManyWithoutItemInputObjectSchema as ReturnedOrderCreateNestedManyWithoutItemInputObjectSchema } from './ReturnedOrderCreateNestedManyWithoutItemInput.schema';
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
  category: z.lazy(() => CategoryCreateNestedOneWithoutItemsInputObjectSchema),
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutItemsInputObjectSchema),
  checkouts: z.lazy(() => CheckoutCreateNestedManyWithoutItemInputObjectSchema),
  returnedOrders: z.lazy(() => ReturnedOrderCreateNestedManyWithoutItemInputObjectSchema),
  defects: z.lazy(() => DefectCreateNestedManyWithoutItemInputObjectSchema),
  expiredItems: z.lazy(() => ExpiredItemCreateNestedManyWithoutItemInputObjectSchema),
  restockItems: z.lazy(() => RestockItemCreateNestedManyWithoutItemInputObjectSchema)
}).strict();
export const ItemCreateInputObjectSchema: z.ZodType<Prisma.ItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateInput>;
export const ItemCreateInputObjectZodSchema = makeSchema();
