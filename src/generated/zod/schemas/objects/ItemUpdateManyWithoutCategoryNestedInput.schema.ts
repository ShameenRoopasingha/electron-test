import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateWithoutCategoryInputObjectSchema as ItemCreateWithoutCategoryInputObjectSchema } from './ItemCreateWithoutCategoryInput.schema';
import { ItemUncheckedCreateWithoutCategoryInputObjectSchema as ItemUncheckedCreateWithoutCategoryInputObjectSchema } from './ItemUncheckedCreateWithoutCategoryInput.schema';
import { ItemCreateOrConnectWithoutCategoryInputObjectSchema as ItemCreateOrConnectWithoutCategoryInputObjectSchema } from './ItemCreateOrConnectWithoutCategoryInput.schema';
import { ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema as ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ItemUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ItemCreateManyCategoryInputEnvelopeObjectSchema as ItemCreateManyCategoryInputEnvelopeObjectSchema } from './ItemCreateManyCategoryInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema as ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ItemUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema as ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ItemUpdateManyWithWhereWithoutCategoryInput.schema';
import { ItemScalarWhereInputObjectSchema as ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema), z.lazy(() => ItemCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ItemCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ItemCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ItemUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ItemCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ItemWhereUniqueInputObjectSchema), z.lazy(() => ItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ItemUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema), z.lazy(() => ItemUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ItemScalarWhereInputObjectSchema), z.lazy(() => ItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ItemUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateManyWithoutCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateManyWithoutCategoryNestedInput>;
export const ItemUpdateManyWithoutCategoryNestedInputObjectZodSchema = makeSchema();
