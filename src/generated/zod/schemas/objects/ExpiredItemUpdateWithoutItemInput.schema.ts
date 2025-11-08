import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutExpiredItemsNestedInputObjectSchema as UserUpdateOneRequiredWithoutExpiredItemsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutExpiredItemsNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  expirationDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutExpiredItemsNestedInputObjectSchema).optional()
}).strict();
export const ExpiredItemUpdateWithoutItemInputObjectSchema: z.ZodType<Prisma.ExpiredItemUpdateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUpdateWithoutItemInput>;
export const ExpiredItemUpdateWithoutItemInputObjectZodSchema = makeSchema();
