import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemUpdateWithoutDefectsInputObjectSchema as ItemUpdateWithoutDefectsInputObjectSchema } from './ItemUpdateWithoutDefectsInput.schema';
import { ItemUncheckedUpdateWithoutDefectsInputObjectSchema as ItemUncheckedUpdateWithoutDefectsInputObjectSchema } from './ItemUncheckedUpdateWithoutDefectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ItemUpdateWithoutDefectsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutDefectsInputObjectSchema)])
}).strict();
export const ItemUpdateToOneWithWhereWithoutDefectsInputObjectSchema: z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutDefectsInput>;
export const ItemUpdateToOneWithWhereWithoutDefectsInputObjectZodSchema = makeSchema();
