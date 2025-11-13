import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ItemUpdateOneWithoutReturnedOrdersNestedInputObjectSchema as ItemUpdateOneWithoutReturnedOrdersNestedInputObjectSchema } from './ItemUpdateOneWithoutReturnedOrdersNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  item: z.lazy(() => ItemUpdateOneWithoutReturnedOrdersNestedInputObjectSchema).optional()
}).strict();
export const ReturnedOrderUpdateWithoutBillInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpdateWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateWithoutBillInput>;
export const ReturnedOrderUpdateWithoutBillInputObjectZodSchema = makeSchema();
