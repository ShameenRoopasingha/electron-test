import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema as CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './CategoryUpdateOneRequiredWithoutItemsNestedInput.schema';
import { SupplierUpdateOneRequiredWithoutItemsNestedInputObjectSchema as SupplierUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './SupplierUpdateOneRequiredWithoutItemsNestedInput.schema';
import { ReturnedOrderUpdateManyWithoutItemNestedInputObjectSchema as ReturnedOrderUpdateManyWithoutItemNestedInputObjectSchema } from './ReturnedOrderUpdateManyWithoutItemNestedInput.schema';
import { DefectUpdateManyWithoutItemNestedInputObjectSchema as DefectUpdateManyWithoutItemNestedInputObjectSchema } from './DefectUpdateManyWithoutItemNestedInput.schema';
import { ExpiredItemUpdateManyWithoutItemNestedInputObjectSchema as ExpiredItemUpdateManyWithoutItemNestedInputObjectSchema } from './ExpiredItemUpdateManyWithoutItemNestedInput.schema';
import { RestockItemUpdateManyWithoutItemNestedInputObjectSchema as RestockItemUpdateManyWithoutItemNestedInputObjectSchema } from './RestockItemUpdateManyWithoutItemNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  barcode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  costPrice: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  sellingPrice: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantityInStock: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reorder_level: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(),
  supplier: z.lazy(() => SupplierUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderUpdateManyWithoutItemNestedInputObjectSchema).optional(),
  defects: z.lazy(() => DefectUpdateManyWithoutItemNestedInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemUpdateManyWithoutItemNestedInputObjectSchema).optional(),
  restockItems: z.lazy(() => RestockItemUpdateManyWithoutItemNestedInputObjectSchema).optional()
}).strict();
export const ItemUpdateWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.ItemUpdateWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateWithoutCheckoutsInput>;
export const ItemUpdateWithoutCheckoutsInputObjectZodSchema = makeSchema();
