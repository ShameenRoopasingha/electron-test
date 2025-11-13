import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutDefectsInputObjectSchema as ItemCreateWithoutDefectsInputObjectSchema } from './ItemCreateWithoutDefectsInput.schema';
import { ItemUncheckedCreateWithoutDefectsInputObjectSchema as ItemUncheckedCreateWithoutDefectsInputObjectSchema } from './ItemUncheckedCreateWithoutDefectsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutDefectsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutDefectsInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutDefectsInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateOrConnectWithoutDefectsInput>;
export const ItemCreateOrConnectWithoutDefectsInputObjectZodSchema = makeSchema();
