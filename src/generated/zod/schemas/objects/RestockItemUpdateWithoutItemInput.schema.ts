import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { RestockUpdateOneRequiredWithoutItemsNestedInputObjectSchema as RestockUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './RestockUpdateOneRequiredWithoutItemsNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  costPrice: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  restock: z.lazy(() => RestockUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional()
}).strict();
export const RestockItemUpdateWithoutItemInputObjectSchema: z.ZodType<Prisma.RestockItemUpdateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpdateWithoutItemInput>;
export const RestockItemUpdateWithoutItemInputObjectZodSchema = makeSchema();
