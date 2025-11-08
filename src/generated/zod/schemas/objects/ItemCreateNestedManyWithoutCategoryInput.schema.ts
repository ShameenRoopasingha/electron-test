import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutCategoryInputObjectSchema as ItemCreateWithoutCategoryInputObjectSchema } from './ItemCreateWithoutCategoryInput.schema';
import { ItemUncheckedCreateWithoutCategoryInputObjectSchema as ItemUncheckedCreateWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateWithoutCategoryInput.schema';
import { ItemCreateOrConnectWithoutCategoryInputObjectSchema as ItemCreateOrConnectWithoutCategoryInputObjectSchema } from './ItemCreateOrConnectWithoutCategoryInput.schema';
import { ItemCreateManyCategoryInputEnvelopeObjectSchema as ItemCreateManyCategoryInputEnvelopeObjectSchema } from './ItemCreateManyCategoryInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema), z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ItemCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ItemCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ItemCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ItemCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ItemCreateNestedManyWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateNestedManyWithoutCategoryInput>;
export const ItemCreateNestedManyWithoutCategoryInputObjectZodSchema = makeSchema();
