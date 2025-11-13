import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutCategoryInputObjectSchema as ItemCreateWithoutCategoryInputObjectSchema } from './ItemCreateWithoutCategoryInput.schema';
import { ItemUncheckedCreateWithoutCategoryInputObjectSchema as ItemUncheckedCreateWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateOrConnectWithoutCategoryInput>;
export const ItemCreateOrConnectWithoutCategoryInputObjectZodSchema = makeSchema();
