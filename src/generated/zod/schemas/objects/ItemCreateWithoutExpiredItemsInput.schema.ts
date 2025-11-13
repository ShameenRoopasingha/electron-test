import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryCreateNestedOneWithoutItemsInputObjectSchema as CategoryCreateNestedOneWithoutItemsInputObjectSchema } from './CategoryCreateNestedOneWithoutItemsInput.schema';
import { SupplierCreateNestedOneWithoutItemsInputObjectSchema as SupplierCreateNestedOneWithoutItemsInputObjectSchema } from './SupplierCreateNestedOneWithoutItemsInput.schema';
import { CheckoutCreateNestedManyWithoutItemInputObjectSchema as CheckoutCreateNestedManyWithoutItemInputObjectSchema } from './CheckoutCreateNestedManyWithoutItemInput.schema';
import { ReturnedOrderCreateNestedManyWithoutItemInputObjectSchema as ReturnedOrderCreateNestedManyWithoutItemInputObjectSchema } from './ReturnedOrderCreateNestedManyWithoutItemInput.schema';
import { DefectCreateNestedManyWithoutItemInputObjectSchema as DefectCreateNestedManyWithoutItemInputObjectSchema } from './DefectCreateNestedManyWithoutItemInput.schema';
import { RestockItemCreateNestedManyWithoutItemInputObjectSchema as RestockItemCreateNestedManyWithoutItemInputObjectSchema } from './RestockItemCreateNestedManyWithoutItemInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  manufacturer: z.string(),
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
  returnedOrders: z.lazy(() => ReturnedOrderCreateNestedManyWithoutItemInputObjectSchema).optional(),
  defects: z.lazy(() => DefectCreateNestedManyWithoutItemInputObjectSchema).optional(),
  restockItems: z.lazy(() => RestockItemCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemCreateWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.ItemCreateWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateWithoutExpiredItemsInput>;
export const ItemCreateWithoutExpiredItemsInputObjectZodSchema = makeSchema();
