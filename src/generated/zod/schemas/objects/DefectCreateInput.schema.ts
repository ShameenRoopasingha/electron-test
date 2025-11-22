import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedOneWithoutDefectsInputObjectSchema as ItemCreateNestedOneWithoutDefectsInputObjectSchema } from './ItemCreateNestedOneWithoutDefectsInput.schema';
import { UserCreateNestedOneWithoutDefectsInputObjectSchema as UserCreateNestedOneWithoutDefectsInputObjectSchema } from './UserCreateNestedOneWithoutDefectsInput.schema'

const makeSchema = () => z.object({
  quantity: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutDefectsInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutDefectsInputObjectSchema)
}).strict();
export const DefectCreateInputObjectSchema: z.ZodType<Prisma.DefectCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateInput>;
export const DefectCreateInputObjectZodSchema = makeSchema();
