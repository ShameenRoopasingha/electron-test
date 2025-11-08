import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemUpdateWithoutCheckoutsInputObjectSchema as ItemUpdateWithoutCheckoutsInputObjectSchema } from './ItemUpdateWithoutCheckoutsInput.schema';
import { ItemUncheckedUpdateWithoutCheckoutsInputObjectSchema as ItemUncheckedUpdateWithoutCheckoutsInputObjectSchema } from './ItemUncheckedUpdateWithoutCheckoutsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ItemUpdateWithoutCheckoutsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCheckoutsInputObjectSchema)])
}).strict();
export const ItemUpdateToOneWithWhereWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutCheckoutsInput>;
export const ItemUpdateToOneWithWhereWithoutCheckoutsInputObjectZodSchema = makeSchema();
