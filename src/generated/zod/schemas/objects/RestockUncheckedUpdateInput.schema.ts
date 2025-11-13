import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RestockItemUncheckedUpdateManyWithoutRestockNestedInputObjectSchema as RestockItemUncheckedUpdateManyWithoutRestockNestedInputObjectSchema } from './RestockItemUncheckedUpdateManyWithoutRestockNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  supplierId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  items: z.lazy(() => RestockItemUncheckedUpdateManyWithoutRestockNestedInputObjectSchema).optional()
}).strict();
export const RestockUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.RestockUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUncheckedUpdateInput>;
export const RestockUncheckedUpdateInputObjectZodSchema = makeSchema();
