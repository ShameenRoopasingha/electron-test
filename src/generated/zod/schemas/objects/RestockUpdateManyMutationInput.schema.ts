import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  totalCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RestockUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.RestockUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateManyMutationInput>;
export const RestockUpdateManyMutationInputObjectZodSchema = makeSchema();
