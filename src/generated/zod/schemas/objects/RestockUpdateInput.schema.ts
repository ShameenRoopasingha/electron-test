import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SupplierUpdateOneRequiredWithoutRestocksNestedInputObjectSchema as SupplierUpdateOneRequiredWithoutRestocksNestedInputObjectSchema } from './SupplierUpdateOneRequiredWithoutRestocksNestedInput.schema';
import { UserUpdateOneRequiredWithoutRestocksNestedInputObjectSchema as UserUpdateOneRequiredWithoutRestocksNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRestocksNestedInput.schema';
import { RestockItemUpdateManyWithoutRestockNestedInputObjectSchema as RestockItemUpdateManyWithoutRestockNestedInputObjectSchema } from './RestockItemUpdateManyWithoutRestockNestedInput.schema'

const makeSchema = () => z.object({
  totalCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  supplier: z.lazy(() => SupplierUpdateOneRequiredWithoutRestocksNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRestocksNestedInputObjectSchema).optional(),
  items: z.lazy(() => RestockItemUpdateManyWithoutRestockNestedInputObjectSchema).optional()
}).strict();
export const RestockUpdateInputObjectSchema: z.ZodType<Prisma.RestockUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateInput>;
export const RestockUpdateInputObjectZodSchema = makeSchema();
