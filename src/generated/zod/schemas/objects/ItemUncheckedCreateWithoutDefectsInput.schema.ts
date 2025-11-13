import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutUncheckedCreateNestedManyWithoutItemInputObjectSchema as CheckoutUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './CheckoutUncheckedCreateNestedManyWithoutItemInput.schema';
import { ReturnedOrderUncheckedCreateNestedManyWithoutItemInputObjectSchema as ReturnedOrderUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './ReturnedOrderUncheckedCreateNestedManyWithoutItemInput.schema';
import { ExpiredItemUncheckedCreateNestedManyWithoutItemInputObjectSchema as ExpiredItemUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './ExpiredItemUncheckedCreateNestedManyWithoutItemInput.schema';
import { RestockItemUncheckedCreateNestedManyWithoutItemInputObjectSchema as RestockItemUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './RestockItemUncheckedCreateNestedManyWithoutItemInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  categoryId: z.number().int(),
  manufacturer: z.string(),
  supplierId: z.number().int(),
  barcode: z.string(),
  costPrice: z.number(),
  sellingPrice: z.number(),
  quantityInStock: z.number().int(),
  reorder_level: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  checkouts: z.lazy(() => CheckoutUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(),
  restockItems: z.lazy(() => RestockItemUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemUncheckedCreateWithoutDefectsInputObjectSchema: z.ZodType<Prisma.ItemUncheckedCreateWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUncheckedCreateWithoutDefectsInput>;
export const ItemUncheckedCreateWithoutDefectsInputObjectZodSchema = makeSchema();
