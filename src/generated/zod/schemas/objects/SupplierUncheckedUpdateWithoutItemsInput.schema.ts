import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RestockUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema as RestockUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema } from './RestockUncheckedUpdateManyWithoutSupplierNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  company: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  address: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  restocks: z.lazy(() => RestockUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema).optional()
}).strict();
export const SupplierUncheckedUpdateWithoutItemsInputObjectSchema: z.ZodType<Prisma.SupplierUncheckedUpdateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUncheckedUpdateWithoutItemsInput>;
export const SupplierUncheckedUpdateWithoutItemsInputObjectZodSchema = makeSchema();
