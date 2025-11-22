import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutDefectsNestedInputObjectSchema as UserUpdateOneRequiredWithoutDefectsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDefectsNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutDefectsNestedInputObjectSchema).optional()
}).strict();
export const DefectUpdateWithoutItemInputObjectSchema: z.ZodType<Prisma.DefectUpdateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUpdateWithoutItemInput>;
export const DefectUpdateWithoutItemInputObjectZodSchema = makeSchema();
