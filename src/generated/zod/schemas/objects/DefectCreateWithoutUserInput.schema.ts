import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedOneWithoutDefectsInputObjectSchema as ItemCreateNestedOneWithoutDefectsInputObjectSchema } from './ItemCreateNestedOneWithoutDefectsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutDefectsInputObjectSchema).optional()
}).strict();
export const DefectCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.DefectCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateWithoutUserInput>;
export const DefectCreateWithoutUserInputObjectZodSchema = makeSchema();
