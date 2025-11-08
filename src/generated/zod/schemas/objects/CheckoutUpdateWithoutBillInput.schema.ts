import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ItemUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema as ItemUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutCheckoutsNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  payedAmount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  item: z.lazy(() => ItemUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema).optional()
}).strict();
export const CheckoutUpdateWithoutBillInputObjectSchema: z.ZodType<Prisma.CheckoutUpdateWithoutBillInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutUpdateWithoutBillInput>;
export const CheckoutUpdateWithoutBillInputObjectZodSchema = makeSchema();
