import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemCreateWithoutUserInputObjectSchema as ExpiredItemCreateWithoutUserInputObjectSchema } from './ExpiredItemCreateWithoutUserInput.schema';
import { ExpiredItemUncheckedCreateWithoutUserInputObjectSchema as ExpiredItemUncheckedCreateWithoutUserInputObjectSchema } from './ExpiredItemUncheckedCreateWithoutUserInput.schema';
import { ExpiredItemCreateOrConnectWithoutUserInputObjectSchema as ExpiredItemCreateOrConnectWithoutUserInputObjectSchema } from './ExpiredItemCreateOrConnectWithoutUserInput.schema';
import { ExpiredItemUpsertWithWhereUniqueWithoutUserInputObjectSchema as ExpiredItemUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ExpiredItemUpsertWithWhereUniqueWithoutUserInput.schema';
import { ExpiredItemCreateManyUserInputEnvelopeObjectSchema as ExpiredItemCreateManyUserInputEnvelopeObjectSchema } from './ExpiredItemCreateManyUserInputEnvelope.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema';
import { ExpiredItemUpdateWithWhereUniqueWithoutUserInputObjectSchema as ExpiredItemUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ExpiredItemUpdateWithWhereUniqueWithoutUserInput.schema';
import { ExpiredItemUpdateManyWithWhereWithoutUserInputObjectSchema as ExpiredItemUpdateManyWithWhereWithoutUserInputObjectSchema } from './ExpiredItemUpdateManyWithWhereWithoutUserInput.schema';
import { ExpiredItemScalarWhereInputObjectSchema as ExpiredItemScalarWhereInputObjectSchema } from './ExpiredItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExpiredItemCreateWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ExpiredItemUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExpiredItemCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ExpiredItemUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExpiredItemCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ExpiredItemUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ExpiredItemUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ExpiredItemScalarWhereInputObjectSchema), z.lazy(() => ExpiredItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ExpiredItemUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ExpiredItemUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemUpdateManyWithoutUserNestedInput>;
export const ExpiredItemUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
