import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemUpdateWithoutCheckoutsInputObjectSchema as ItemUpdateWithoutCheckoutsInputObjectSchema } from './ItemUpdateWithoutCheckoutsInput.schema';
import { ItemUncheckedUpdateWithoutCheckoutsInputObjectSchema as ItemUncheckedUpdateWithoutCheckoutsInputObjectSchema } from './ItemUncheckedUpdateWithoutCheckoutsInput.schema';
import { ItemCreateWithoutCheckoutsInputObjectSchema as ItemCreateWithoutCheckoutsInputObjectSchema } from './ItemCreateWithoutCheckoutsInput.schema';
import { ItemUncheckedCreateWithoutCheckoutsInputObjectSchema as ItemUncheckedCreateWithoutCheckoutsInputObjectSchema } from './ItemUncheckedCreateWithoutCheckoutsInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ItemUpdateWithoutCheckoutsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCheckoutsInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutCheckoutsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCheckoutsInputObjectSchema)]),
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemUpsertWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpsertWithoutCheckoutsInput>;
export const ItemUpsertWithoutCheckoutsInputObjectZodSchema = makeSchema();
