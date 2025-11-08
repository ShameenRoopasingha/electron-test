import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryCreateNestedOneWithoutItemsInputObjectSchema as CategoryCreateNestedOneWithoutItemsInputObjectSchema } from './CategoryCreateNestedOneWithoutItemsInput.schema';
import { SupplierCreateNestedOneWithoutItemsInputObjectSchema as SupplierCreateNestedOneWithoutItemsInputObjectSchema } from './SupplierCreateNestedOneWithoutItemsInput.schema';
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
  updatedAt: z.coerce.date().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutItemsInputObjectSchema),
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutItemsInputObjectSchema),
  returnedOrders: z.lazy(() => ReturnedOrderCreateNestedManyWithoutItemInputObjectSchema).optional(),
  defects: z.lazy(() => DefectCreateNestedManyWithoutItemInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemCreateNestedManyWithoutItemInputObjectSchema).optional(),
  restockItems: z.lazy(() => RestockItemCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemCreateWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.ItemCreateWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateWithoutCheckoutsInput>;
export const ItemCreateWithoutCheckoutsInputObjectZodSchema = makeSchema();
