import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemCreateWithoutItemInputObjectSchema as RestockItemCreateWithoutItemInputObjectSchema } from './RestockItemCreateWithoutItemInput.schema';
import { RestockItemUncheckedCreateWithoutItemInputObjectSchema as RestockItemUncheckedCreateWithoutItemInputObjectSchema } from './RestockItemUncheckedCreateWithoutItemInput.schema';
import { RestockItemCreateOrConnectWithoutItemInputObjectSchema as RestockItemCreateOrConnectWithoutItemInputObjectSchema } from './RestockItemCreateOrConnectWithoutItemInput.schema';
import { RestockItemCreateManyItemInputEnvelopeObjectSchema as RestockItemCreateManyItemInputEnvelopeObjectSchema } from './RestockItemCreateManyItemInputEnvelope.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockItemCreateWithoutItemInputObjectSchema), z.lazy(() => RestockItemCreateWithoutItemInputObjectSchema).array(), z.lazy(() => RestockItemUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => RestockItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RestockItemCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => RestockItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RestockItemCreateManyItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RestockItemUncheckedCreateNestedManyWithoutItemInputObjectSchema: z.ZodType<Prisma.RestockItemUncheckedCreateNestedManyWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUncheckedCreateNestedManyWithoutItemInput>;
export const RestockItemUncheckedCreateNestedManyWithoutItemInputObjectZodSchema = makeSchema();
