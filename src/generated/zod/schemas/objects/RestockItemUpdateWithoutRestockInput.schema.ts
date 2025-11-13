import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ItemUpdateOneWithoutRestockItemsNestedInputObjectSchema as ItemUpdateOneWithoutRestockItemsNestedInputObjectSchema } from './ItemUpdateOneWithoutRestockItemsNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  costPrice: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  item: z.lazy(() => ItemUpdateOneWithoutRestockItemsNestedInputObjectSchema).optional()
}).strict();
export const RestockItemUpdateWithoutRestockInputObjectSchema: z.ZodType<Prisma.RestockItemUpdateWithoutRestockInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpdateWithoutRestockInput>;
export const RestockItemUpdateWithoutRestockInputObjectZodSchema = makeSchema();
