import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemCreateWithoutRestockInputObjectSchema as RestockItemCreateWithoutRestockInputObjectSchema } from './RestockItemCreateWithoutRestockInput.schema';
import { RestockItemUncheckedCreateWithoutRestockInputObjectSchema as RestockItemUncheckedCreateWithoutRestockInputObjectSchema } from './RestockItemUncheckedCreateWithoutRestockInput.schema';
import { RestockItemCreateOrConnectWithoutRestockInputObjectSchema as RestockItemCreateOrConnectWithoutRestockInputObjectSchema } from './RestockItemCreateOrConnectWithoutRestockInput.schema';
import { RestockItemUpsertWithWhereUniqueWithoutRestockInputObjectSchema as RestockItemUpsertWithWhereUniqueWithoutRestockInputObjectSchema } from './RestockItemUpsertWithWhereUniqueWithoutRestockInput.schema';
import { RestockItemCreateManyRestockInputEnvelopeObjectSchema as RestockItemCreateManyRestockInputEnvelopeObjectSchema } from './RestockItemCreateManyRestockInputEnvelope.schema';
import { RestockItemWhereUniqueInputObjectSchema as RestockItemWhereUniqueInputObjectSchema } from './RestockItemWhereUniqueInput.schema';
import { RestockItemUpdateWithWhereUniqueWithoutRestockInputObjectSchema as RestockItemUpdateWithWhereUniqueWithoutRestockInputObjectSchema } from './RestockItemUpdateWithWhereUniqueWithoutRestockInput.schema';
import { RestockItemUpdateManyWithWhereWithoutRestockInputObjectSchema as RestockItemUpdateManyWithWhereWithoutRestockInputObjectSchema } from './RestockItemUpdateManyWithWhereWithoutRestockInput.schema';
import { RestockItemScalarWhereInputObjectSchema as RestockItemScalarWhereInputObjectSchema } from './RestockItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockItemCreateWithoutRestockInputObjectSchema), z.lazy(() => RestockItemCreateWithoutRestockInputObjectSchema).array(), z.lazy(() => RestockItemUncheckedCreateWithoutRestockInputObjectSchema), z.lazy(() => RestockItemUncheckedCreateWithoutRestockInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RestockItemCreateOrConnectWithoutRestockInputObjectSchema), z.lazy(() => RestockItemCreateOrConnectWithoutRestockInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RestockItemUpsertWithWhereUniqueWithoutRestockInputObjectSchema), z.lazy(() => RestockItemUpsertWithWhereUniqueWithoutRestockInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RestockItemCreateManyRestockInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RestockItemWhereUniqueInputObjectSchema), z.lazy(() => RestockItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RestockItemUpdateWithWhereUniqueWithoutRestockInputObjectSchema), z.lazy(() => RestockItemUpdateWithWhereUniqueWithoutRestockInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RestockItemUpdateManyWithWhereWithoutRestockInputObjectSchema), z.lazy(() => RestockItemUpdateManyWithWhereWithoutRestockInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RestockItemScalarWhereInputObjectSchema), z.lazy(() => RestockItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RestockItemUpdateManyWithoutRestockNestedInputObjectSchema: z.ZodType<Prisma.RestockItemUpdateManyWithoutRestockNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemUpdateManyWithoutRestockNestedInput>;
export const RestockItemUpdateManyWithoutRestockNestedInputObjectZodSchema = makeSchema();
