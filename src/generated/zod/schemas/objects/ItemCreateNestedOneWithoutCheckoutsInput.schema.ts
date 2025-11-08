import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutCheckoutsInputObjectSchema as ItemCreateWithoutCheckoutsInputObjectSchema } from './ItemCreateWithoutCheckoutsInput.schema';
import { ItemUncheckedCreateWithoutCheckoutsInputObjectSchema as ItemUncheckedCreateWithoutCheckoutsInputObjectSchema } from './ItemUncheckedCreateWithoutCheckoutsInput.schema';
import { ItemCreateOrConnectWithoutCheckoutsInputObjectSchema as ItemCreateOrConnectWithoutCheckoutsInputObjectSchema } from './ItemCreateOrConnectWithoutCheckoutsInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutCheckoutsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCheckoutsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutCheckoutsInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const ItemCreateNestedOneWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.ItemCreateNestedOneWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateNestedOneWithoutCheckoutsInput>;
export const ItemCreateNestedOneWithoutCheckoutsInputObjectZodSchema = makeSchema();
