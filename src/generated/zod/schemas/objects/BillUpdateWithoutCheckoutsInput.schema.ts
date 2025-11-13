import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBillsNestedInputObjectSchema as UserUpdateOneRequiredWithoutBillsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBillsNestedInput.schema';
import { CustomerUpdateOneRequiredWithoutBillsNestedInputObjectSchema as CustomerUpdateOneRequiredWithoutBillsNestedInputObjectSchema } from './CustomerUpdateOneRequiredWithoutBillsNestedInput.schema';
import { ReturnedOrderUpdateManyWithoutBillNestedInputObjectSchema as ReturnedOrderUpdateManyWithoutBillNestedInputObjectSchema } from './ReturnedOrderUpdateManyWithoutBillNestedInput.schema'

const makeSchema = () => z.object({
  totalAmount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentMethod: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentStatus: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBillsNestedInputObjectSchema).optional(),
  customer: z.lazy(() => CustomerUpdateOneRequiredWithoutBillsNestedInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderUpdateManyWithoutBillNestedInputObjectSchema).optional()
}).strict();
export const BillUpdateWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.BillUpdateWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.BillUpdateWithoutCheckoutsInput>;
export const BillUpdateWithoutCheckoutsInputObjectZodSchema = makeSchema();
