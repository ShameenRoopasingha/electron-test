import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BillUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema as BillUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema } from './BillUpdateOneRequiredWithoutCheckoutsNestedInput.schema';
import { ItemUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema as ItemUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutCheckoutsNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  payedAmount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bill: z.lazy(() => BillUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema).optional(),
  item: z.lazy(() => ItemUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema).optional()
}).strict();
export const CheckoutUpdateInputObjectSchema: z.ZodType<Prisma.CheckoutUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUpdateInput>;
export const CheckoutUpdateInputObjectZodSchema = makeSchema();
