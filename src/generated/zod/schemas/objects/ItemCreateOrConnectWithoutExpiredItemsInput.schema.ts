import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutExpiredItemsInputObjectSchema as ItemCreateWithoutExpiredItemsInputObjectSchema } from './ItemCreateWithoutExpiredItemsInput.schema';
import { ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema as ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema } from './ItemUncheckedCreateWithoutExpiredItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutExpiredItemsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateOrConnectWithoutExpiredItemsInput>;
export const ItemCreateOrConnectWithoutExpiredItemsInputObjectZodSchema = makeSchema();
