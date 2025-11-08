import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemCreateWithoutItemInputObjectSchema as ExpiredItemCreateWithoutItemInputObjectSchema } from './ExpiredItemCreateWithoutItemInput.schema';
import { ExpiredItemUncheckedCreateWithoutItemInputObjectSchema as ExpiredItemUncheckedCreateWithoutItemInputObjectSchema } from './ExpiredItemUncheckedCreateWithoutItemInput.schema';
import { ExpiredItemCreateOrConnectWithoutItemInputObjectSchema as ExpiredItemCreateOrConnectWithoutItemInputObjectSchema } from './ExpiredItemCreateOrConnectWithoutItemInput.schema';
import { ExpiredItemCreateManyItemInputEnvelopeObjectSchema as ExpiredItemCreateManyItemInputEnvelopeObjectSchema } from './ExpiredItemCreateManyItemInputEnvelope.schema';
import { ExpiredItemWhereUniqueInputObjectSchema as ExpiredItemWhereUniqueInputObjectSchema } from './ExpiredItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExpiredItemCreateWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemCreateWithoutItemInputObjectSchema).array(), z.lazy(() => ExpiredItemUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExpiredItemCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => ExpiredItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExpiredItemCreateManyItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema), z.lazy(() => ExpiredItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ExpiredItemCreateNestedManyWithoutItemInputObjectSchema: z.ZodType<Prisma.ExpiredItemCreateNestedManyWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateNestedManyWithoutItemInput>;
export const ExpiredItemCreateNestedManyWithoutItemInputObjectZodSchema = makeSchema();
