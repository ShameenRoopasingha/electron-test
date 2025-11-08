import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemCreateWithoutItemInputObjectSchema as ExpiredItemCreateWithoutItemInputObjectSchema } from './ExpiredItemCreateWithoutItemInput.schema';
import { ExpiredItemUncheckedCreateWithoutItemInputObjectSchema as ExpiredItemUncheckedCreateWithoutItemInputObjectSchema } from './ExpiredItemUncheckedCreateWithoutItemInput.schema';
import { ExpiredItemCreateOrConnectWithoutItemInputObjectSchema as ExpiredItemCreateOrConnectWithoutItemInputObjectSchema } from './ExpiredItemCreateOrConnectWithoutItemInput.schema';
import { ExpiredItemUpsertWithWhereUniqueWithoutItemInputObjectSchema as ExpiredItemUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './ExpiredItemUpsertWithWhereUniqueWithoutItemInput.schema';
import { ExpiredItemCreateManyItemInputEnvelopeObjectSchema as ExpiredItemCreateManyItemInputEnvelopeObjectSchema } from './ExpiredItemCreateManyItemInputEnvelope.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemUpdateWithWhereUniqueWithoutItemInputObjectSchema as ExpiredItemUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './ExpiredItemUpdateWithWhereUniqueWithoutItemInput.schema';
import { ExpiredItemUpdateManyWithWhereWithoutItemInputObjectSchema as ExpiredItemUpdateManyWithWhereWithoutItemInputObjectSchema } from './ExpiredItemUpdateManyWithWhereWithoutItemInput.schema';
import { ExpiredItemScalarWhereInputObjectSchema as ExpiredItemScalarWhereInputObjectSchema } from './ExpiredItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExpiredItemCreateWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemCreateWithoutItemInputObjectSchema).array(), z.lazy(() => ExpiredItemUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExpiredItemCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ExpiredItemUpsertWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExpiredItemCreateManyItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ExpiredItemUpdateWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ExpiredItemUpdateManyWithWhereWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ExpiredItemScalarWhereInputObjectSchema), z.lazy(() => ExpiredItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ExpiredItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema: z.ZodType<Prisma.ExpiredItemUncheckedUpdateManyWithoutItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUncheckedUpdateManyWithoutItemNestedInput>;
export const ExpiredItemUncheckedUpdateManyWithoutItemNestedInputObjectZodSchema = makeSchema();
