import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemUpdateWithoutDefectsInputObjectSchema as ItemUpdateWithoutDefectsInputObjectSchema } from './ItemUpdateWithoutDefectsInput.schema';
import { ItemUncheckedUpdateWithoutDefectsInputObjectSchema as ItemUncheckedUpdateWithoutDefectsInputObjectSchema } from './ItemUncheckedUpdateWithoutDefectsInput.schema';
import { ItemCreateWithoutDefectsInputObjectSchema as ItemCreateWithoutDefectsInputObjectSchema } from './ItemCreateWithoutDefectsInput.schema';
import { ItemUncheckedCreateWithoutDefectsInputObjectSchema as ItemUncheckedCreateWithoutDefectsInputObjectSchema } from './ItemUncheckedCreateWithoutDefectsInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ItemUpdateWithoutDefectsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutDefectsInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutDefectsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutDefectsInputObjectSchema)]),
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemUpsertWithoutDefectsInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpsertWithoutDefectsInput>;
export const ItemUpsertWithoutDefectsInputObjectZodSchema = makeSchema();
