import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutCheckoutsInputObjectSchema as ItemCreateWithoutCheckoutsInputObjectSchema } from './ItemCreateWithoutCheckoutsInput.schema';
import { ItemUncheckedCreateWithoutCheckoutsInputObjectSchema as ItemUncheckedCreateWithoutCheckoutsInputObjectSchema } from './ItemUncheckedCreateWithoutCheckoutsInput.schema';
import { ItemCreateOrConnectWithoutCheckoutsInputObjectSchema as ItemCreateOrConnectWithoutCheckoutsInputObjectSchema } from './ItemCreateOrConnectWithoutCheckoutsInput.schema';
import { ItemUpsertWithoutCheckoutsInputObjectSchema as ItemUpsertWithoutCheckoutsInputObjectSchema } from './ItemUpsertWithoutCheckoutsInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateToOneWithWhereWithoutCheckoutsInputObjectSchema as ItemUpdateToOneWithWhereWithoutCheckoutsInputObjectSchema } from './ItemUpdateToOneWithWhereWithoutCheckoutsInput.schema';
import { ItemUpdateWithoutCheckoutsInputObjectSchema as ItemUpdateWithoutCheckoutsInputObjectSchema } from './ItemUpdateWithoutCheckoutsInput.schema';
import { ItemUncheckedUpdateWithoutCheckoutsInputObjectSchema as ItemUncheckedUpdateWithoutCheckoutsInputObjectSchema } from './ItemUncheckedUpdateWithoutCheckoutsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutCheckoutsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCheckoutsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutCheckoutsInputObjectSchema).optional(),
  upsert: z.lazy(() => ItemUpsertWithoutCheckoutsInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ItemUpdateToOneWithWhereWithoutCheckoutsInputObjectSchema), z.lazy(() => ItemUpdateWithoutCheckoutsInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCheckoutsInputObjectSchema)]).optional()
}).strict();
export const ItemUpdateOneRequiredWithoutCheckoutsNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutCheckoutsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateOneRequiredWithoutCheckoutsNestedInput>;
export const ItemUpdateOneRequiredWithoutCheckoutsNestedInputObjectZodSchema = makeSchema();
