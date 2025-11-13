import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CheckoutUncheckedUpdateManyWithoutItemNestedInputObjectSchema as CheckoutUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './CheckoutUncheckedUpdateManyWithoutItemNestedInput.schema';
import { ReturnedOrderUncheckedUpdateManyWithoutItemNestedInputObjectSchema as ReturnedOrderUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './ReturnedOrderUncheckedUpdateManyWithoutItemNestedInput.schema';
import { DefectUncheckedUpdateManyWithoutItemNestedInputObjectSchema as DefectUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './DefectUncheckedUpdateManyWithoutItemNestedInput.schema';
import { ExpiredItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema as ExpiredItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './ExpiredItemUncheckedUpdateManyWithoutItemNestedInput.schema';
import { RestockItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema as RestockItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './RestockItemUncheckedUpdateManyWithoutItemNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoryId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  manufacturer: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  supplierId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  barcode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  costPrice: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  sellingPrice: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantityInStock: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reorder_level: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  checkouts: z.lazy(() => CheckoutUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional(),
  defects: z.lazy(() => DefectUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional(),
  restockItems: z.lazy(() => RestockItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional()
}).strict();
export const ItemUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ItemUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUncheckedUpdateInput>;
export const ItemUncheckedUpdateInputObjectZodSchema = makeSchema();
