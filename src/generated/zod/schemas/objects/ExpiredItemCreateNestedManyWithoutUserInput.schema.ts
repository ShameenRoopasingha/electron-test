import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemCreateWithoutUserInputObjectSchema as ExpiredItemCreateWithoutUserInputObjectSchema } from './ExpiredItemCreateWithoutUserInput.schema';
import { ExpiredItemUncheckedCreateWithoutUserInputObjectSchema as ExpiredItemUncheckedCreateWithoutUserInputObjectSchema } from './ExpiredItemUncheckedCreateWithoutUserInput.schema';
import { ExpiredItemCreateOrConnectWithoutUserInputObjectSchema as ExpiredItemCreateOrConnectWithoutUserInputObjectSchema } from './ExpiredItemCreateOrConnectWithoutUserInput.schema';
import { ExpiredItemCreateManyUserInputEnvelopeObjectSchema as ExpiredItemCreateManyUserInputEnvelopeObjectSchema } from './ExpiredItemCreateManyUserInputEnvelope.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExpiredItemCreateWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ExpiredItemUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExpiredItemCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ExpiredItemCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExpiredItemCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ExpiredItemCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ExpiredItemCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateNestedManyWithoutUserInput>;
export const ExpiredItemCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
