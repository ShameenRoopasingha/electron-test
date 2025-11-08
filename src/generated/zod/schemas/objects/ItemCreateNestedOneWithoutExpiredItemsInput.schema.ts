import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutExpiredItemsInputObjectSchema as ItemCreateWithoutExpiredItemsInputObjectSchema } from './ItemCreateWithoutExpiredItemsInput.schema';
import { ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema as ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema } from './ItemUncheckedCreateWithoutExpiredItemsInput.schema';
import { ItemCreateOrConnectWithoutExpiredItemsInputObjectSchema as ItemCreateOrConnectWithoutExpiredItemsInputObjectSchema } from './ItemCreateOrConnectWithoutExpiredItemsInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutExpiredItemsInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutExpiredItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutExpiredItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const ItemCreateNestedOneWithoutExpiredItemsInputObjectSchema: z.ZodType<Prisma.ItemCreateNestedOneWithoutExpiredItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateNestedOneWithoutExpiredItemsInput>;
export const ItemCreateNestedOneWithoutExpiredItemsInputObjectZodSchema = makeSchema();
