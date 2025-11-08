import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SupplierUpdateOneRequiredWithoutRestocksNestedInputObjectSchema as SupplierUpdateOneRequiredWithoutRestocksNestedInputObjectSchema } from './SupplierUpdateOneRequiredWithoutRestocksNestedInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  supplier: z.lazy(() => SupplierUpdateOneRequiredWithoutRestocksNestedInputObjectSchema).optional()
}).strict();
export const RestockUpdateWithoutItemsInputObjectSchema: z.ZodType<Prisma.RestockUpdateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateWithoutItemsInput>;
export const RestockUpdateWithoutItemsInputObjectZodSchema = makeSchema();
