import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ItemUpdateManyWithoutSupplierNestedInputObjectSchema as ItemUpdateManyWithoutSupplierNestedInputObjectSchema } from './ItemUpdateManyWithoutSupplierNestedInput.schema';
import { RestockUpdateManyWithoutSupplierNestedInputObjectSchema as RestockUpdateManyWithoutSupplierNestedInputObjectSchema } from './RestockUpdateManyWithoutSupplierNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  company: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  address: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  items: z.lazy(() => ItemUpdateManyWithoutSupplierNestedInputObjectSchema).optional(),
  restocks: z.lazy(() => RestockUpdateManyWithoutSupplierNestedInputObjectSchema).optional()
}).strict();
export const SupplierUpdateInputObjectSchema: z.ZodType<Prisma.SupplierUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUpdateInput>;
export const SupplierUpdateInputObjectZodSchema = makeSchema();
