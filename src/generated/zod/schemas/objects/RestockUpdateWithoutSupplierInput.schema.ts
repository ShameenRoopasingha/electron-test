import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RestockItemUpdateManyWithoutRestockNestedInputObjectSchema as RestockItemUpdateManyWithoutRestockNestedInputObjectSchema } from './RestockItemUpdateManyWithoutRestockNestedInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  items: z.lazy(() => RestockItemUpdateManyWithoutRestockNestedInputObjectSchema).optional()
}).strict();
export const RestockUpdateWithoutSupplierInputObjectSchema: z.ZodType<Prisma.RestockUpdateWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateWithoutSupplierInput>;
export const RestockUpdateWithoutSupplierInputObjectZodSchema = makeSchema();
