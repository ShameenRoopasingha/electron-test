import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ItemUpdateOneWithoutDefectsNestedInputObjectSchema as ItemUpdateOneWithoutDefectsNestedInputObjectSchema } from './ItemUpdateOneWithoutDefectsNestedInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  item: z.lazy(() => ItemUpdateOneWithoutDefectsNestedInputObjectSchema).optional()
}).strict();
export const DefectUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.DefectUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUpdateWithoutUserInput>;
export const DefectUpdateWithoutUserInputObjectZodSchema = makeSchema();
