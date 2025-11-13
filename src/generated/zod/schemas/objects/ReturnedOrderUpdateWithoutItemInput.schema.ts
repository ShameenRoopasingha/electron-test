import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BillUpdateOneWithoutReturnedOrdersNestedInputObjectSchema as BillUpdateOneWithoutReturnedOrdersNestedInputObjectSchema } from './BillUpdateOneWithoutReturnedOrdersNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bill: z.lazy(() => BillUpdateOneWithoutReturnedOrdersNestedInputObjectSchema).optional()
}).strict();
export const ReturnedOrderUpdateWithoutItemInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpdateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateWithoutItemInput>;
export const ReturnedOrderUpdateWithoutItemInputObjectZodSchema = makeSchema();
