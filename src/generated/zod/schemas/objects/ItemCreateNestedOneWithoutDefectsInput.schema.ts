import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutDefectsInputObjectSchema as ItemCreateWithoutDefectsInputObjectSchema } from './ItemCreateWithoutDefectsInput.schema';
import { ItemUncheckedCreateWithoutDefectsInputObjectSchema as ItemUncheckedCreateWithoutDefectsInputObjectSchema } from './ItemUncheckedCreateWithoutDefectsInput.schema';
import { ItemCreateOrConnectWithoutDefectsInputObjectSchema as ItemCreateOrConnectWithoutDefectsInputObjectSchema } from './ItemCreateOrConnectWithoutDefectsInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutDefectsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutDefectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutDefectsInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const ItemCreateNestedOneWithoutDefectsInputObjectSchema: z.ZodType<Prisma.ItemCreateNestedOneWithoutDefectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateNestedOneWithoutDefectsInput>;
export const ItemCreateNestedOneWithoutDefectsInputObjectZodSchema = makeSchema();
