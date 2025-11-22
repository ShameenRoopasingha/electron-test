import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutDefectsInputObjectSchema as UserCreateNestedOneWithoutDefectsInputObjectSchema } from './UserCreateNestedOneWithoutDefectsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutDefectsInputObjectSchema)
}).strict();
export const DefectCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.DefectCreateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateWithoutItemInput>;
export const DefectCreateWithoutItemInputObjectZodSchema = makeSchema();
