import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutDefectsInputObjectSchema as ItemCreateWithoutDefectsInputObjectSchema } from './ItemCreateWithoutDefectsInput.schema';
import { ItemUncheckedCreateWithoutDefectsInputObjectSchema as ItemUncheckedCreateWithoutDefectsInputObjectSchema } from './ItemUncheckedCreateWithoutDefectsInput.schema';
import { ItemCreateOrConnectWithoutDefectsInputObjectSchema as ItemCreateOrConnectWithoutDefectsInputObjectSchema } from './ItemCreateOrConnectWithoutDefectsInput.schema';
import { ItemUpsertWithoutDefectsInputObjectSchema as ItemUpsertWithoutDefectsInputObjectSchema } from './ItemUpsertWithoutDefectsInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateToOneWithWhereWithoutDefectsInputObjectSchema as ItemUpdateToOneWithWhereWithoutDefectsInputObjectSchema } from './ItemUpdateToOneWithWhereWithoutDefectsInput.schema';
import { ItemUpdateWithoutDefectsInputObjectSchema as ItemUpdateWithoutDefectsInputObjectSchema } from './ItemUpdateWithoutDefectsInput.schema';
import { ItemUncheckedUpdateWithoutDefectsInputObjectSchema as ItemUncheckedUpdateWithoutDefectsInputObjectSchema } from './ItemUncheckedUpdateWithoutDefectsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutDefectsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutDefectsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutDefectsInputObjectSchema).optional(),
  upsert: z.lazy(() => ItemUpsertWithoutDefectsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ItemUpdateToOneWithWhereWithoutDefectsInputObjectSchema), z.lazy(() => ItemUpdateWithoutDefectsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutDefectsInputObjectSchema)]).optional()
}).strict();
export const ItemUpdateOneWithoutDefectsNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateOneWithoutDefectsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateOneWithoutDefectsNestedInput>;
export const ItemUpdateOneWithoutDefectsNestedInputObjectZodSchema = makeSchema();
