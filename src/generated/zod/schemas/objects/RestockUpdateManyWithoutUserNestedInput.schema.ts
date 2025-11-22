import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateWithoutUserInputObjectSchema as RestockCreateWithoutUserInputObjectSchema } from './RestockCreateWithoutUserInput.schema';
import { RestockUncheckedCreateWithoutUserInputObjectSchema as RestockUncheckedCreateWithoutUserInputObjectSchema } from './RestockUncheckedCreateWithoutUserInput.schema';
import { RestockCreateOrConnectWithoutUserInputObjectSchema as RestockCreateOrConnectWithoutUserInputObjectSchema } from './RestockCreateOrConnectWithoutUserInput.schema';
import { RestockUpsertWithWhereUniqueWithoutUserInputObjectSchema as RestockUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './RestockUpsertWithWhereUniqueWithoutUserInput.schema';
import { RestockCreateManyUserInputEnvelopeObjectSchema as RestockCreateManyUserInputEnvelopeObjectSchema } from './RestockCreateManyUserInputEnvelope.schema';
import { RestockWhereUniqueInputObjectSchema as RestockWhereUniqueInputObjectSchema } from './RestockWhereUniqueInput.schema';
import { RestockUpdateWithWhereUniqueWithoutUserInputObjectSchema as RestockUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './RestockUpdateWithWhereUniqueWithoutUserInput.schema';
import { RestockUpdateManyWithWhereWithoutUserInputObjectSchema as RestockUpdateManyWithWhereWithoutUserInputObjectSchema } from './RestockUpdateManyWithWhereWithoutUserInput.schema';
import { RestockScalarWhereInputObjectSchema as RestockScalarWhereInputObjectSchema } from './RestockScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RestockCreateWithoutUserInputObjectSchema), z.lazy(() => RestockCreateWithoutUserInputObjectSchema).array(), z.lazy(() => RestockUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => RestockUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RestockCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => RestockCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RestockUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => RestockUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RestockCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RestockWhereUniqueInputObjectSchema), z.lazy(() => RestockWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RestockUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => RestockUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RestockUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => RestockUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RestockScalarWhereInputObjectSchema), z.lazy(() => RestockScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RestockUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.RestockUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockUpdateManyWithoutUserNestedInput>;
export const RestockUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
