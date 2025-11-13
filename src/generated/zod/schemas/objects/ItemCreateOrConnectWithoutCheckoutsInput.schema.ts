import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutCheckoutsInputObjectSchema as ItemCreateWithoutCheckoutsInputObjectSchema } from './ItemCreateWithoutCheckoutsInput.schema';
import { ItemUncheckedCreateWithoutCheckoutsInputObjectSchema as ItemUncheckedCreateWithoutCheckoutsInputObjectSchema } from './ItemUncheckedCreateWithoutCheckoutsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutCheckoutsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCheckoutsInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutCheckoutsInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutCheckoutsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateOrConnectWithoutCheckoutsInput>;
export const ItemCreateOrConnectWithoutCheckoutsInputObjectZodSchema = makeSchema();
