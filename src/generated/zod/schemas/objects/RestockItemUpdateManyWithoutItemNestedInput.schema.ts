import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemCreateWithoutItemInputObjectSchema as RestockItemCreateWithoutItemInputObjectSchema } from './RestockItemCreateWithoutItemInput.schema';
import { RestockItemUncheckedCreateWithoutItemInputObjectSchema as RestockItemUncheckedCreateWithoutItemInputObjectSchema } from './RestockItemUncheckedCreateWithoutItemInput.schema';
import { RestockItemCreateOrConnectWithoutItemInputObjectSchema as RestockItemCreateOrConnectWithoutItemInputObjectSchema } from './RestockItemCreateOrConnectWithoutItemInput.schema';
import { RestockItemUpsertWithWhereUniqueWithoutItemInputObjectSchema as RestockItemUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './RestockItemUpsertWithWhereUniqueWithoutItemInput.schema';
import { RestockItemCreateManyItemInputEnvelopeObjectSchema as RestockItemCreateManyItemInputEnvelopeObjectSchema } from './RestockItemCreateManyItemInputEnvelope.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema';
import { RestockItemUpdateWithWhereUniqueWithoutItemInputObjectSchema as RestockItemUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './RestockItemUpdateWithWhereUniqueWithoutItemInput.schema';
import { RestockItemUpdateManyWithWhereWithoutItemInputObjectSchema as RestockItemUpdateManyWithWhereWithoutItemInputObjectSchema } from './RestockItemUpdateManyWithWhereWithoutItemInput.schema';
import { RestockItemScalarWhereInputObjectSchema as RestockItemScalarWhereInputObjectSchema } from './RestockItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockItemCreateWithoutItemInputObjectSchema), z.lazy(() => RestockItemCreateWithoutItemInputObjectSchema).array(), z.lazy(() => RestockItemUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => RestockItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RestockItemCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => RestockItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RestockItemUpsertWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => RestockItemUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RestockItemCreateManyItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RestockItemUpdateWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => RestockItemUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RestockItemUpdateManyWithWhereWithoutItemInputObjectSchema), z.lazy(() => RestockItemUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RestockItemScalarWhereInputObjectSchema), z.lazy(() => RestockItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RestockItemUpdateManyWithoutItemNestedInputObjectSchema: z.ZodType<Prisma.RestockItemUpdateManyWithoutItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpdateManyWithoutItemNestedInput>;
export const RestockItemUpdateManyWithoutItemNestedInputObjectZodSchema = makeSchema();
