import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BillUpdateOneWithoutReturnedOrdersNestedInputObjectSchema as BillUpdateOneWithoutReturnedOrdersNestedInputObjectSchema } from './BillUpdateOneWithoutReturnedOrdersNestedInput.schema';
import { ItemUpdateOneWithoutReturnedOrdersNestedInputObjectSchema as ItemUpdateOneWithoutReturnedOrdersNestedInputObjectSchema } from './ItemUpdateOneWithoutReturnedOrdersNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bill: z.lazy(() => BillUpdateOneWithoutReturnedOrdersNestedInputObjectSchema).optional(),
  item: z.lazy(() => ItemUpdateOneWithoutReturnedOrdersNestedInputObjectSchema).optional()
}).strict();
export const ReturnedOrderUpdateInputObjectSchema: z.ZodType<Prisma.ReturnedOrderUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateInput>;
export const ReturnedOrderUpdateInputObjectZodSchema = makeSchema();
