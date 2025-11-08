import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutUncheckedCreateNestedManyWithoutItemInputObjectSchema as CheckoutUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './CheckoutUncheckedCreateNestedManyWithoutItemInput.schema';
import { DefectUncheckedCreateNestedManyWithoutItemInputObjectSchema as DefectUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './DefectUncheckedCreateNestedManyWithoutItemInput.schema';
import { ExpiredItemUncheckedCreateNestedManyWithoutItemInputObjectSchema as ExpiredItemUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './ExpiredItemUncheckedCreateNestedManyWithoutItemInput.schema';
import { RestockItemUncheckedCreateNestedManyWithoutItemInputObjectSchema as RestockItemUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './RestockItemUncheckedCreateNestedManyWithoutItemInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  categoryId: z.number().int(),
  supplierId: z.number().int(),
  barcode: z.string(),
  costPrice: z.number(),
  sellingPrice: z.number(),
  quantityInStock: z.number().int(),
  reorder_level: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  checkouts: z.lazy(() => CheckoutUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(),
  defects: z.lazy(() => DefectUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(),
  restockItems: z.lazy(() => RestockItemUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemUncheckedCreateWithoutReturnedOrdersInputObjectSchema: z.ZodType<Prisma.ItemUncheckedCreateWithoutReturnedOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUncheckedCreateWithoutReturnedOrdersInput>;
export const ItemUncheckedCreateWithoutReturnedOrdersInputObjectZodSchema = makeSchema();
