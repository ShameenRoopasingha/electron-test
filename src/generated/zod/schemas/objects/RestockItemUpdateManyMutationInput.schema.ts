import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  costPrice: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RestockItemUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.RestockItemUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpdateManyMutationInput>;
export const RestockItemUpdateManyMutationInputObjectZodSchema = makeSchema();
