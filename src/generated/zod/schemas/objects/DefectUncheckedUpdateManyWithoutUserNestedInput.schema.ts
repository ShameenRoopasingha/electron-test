import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectCreateWithoutUserInputObjectSchema as DefectCreateWithoutUserInputObjectSchema } from './DefectCreateWithoutUserInput.schema';
import { DefectUncheckedCreateWithoutUserInputObjectSchema as DefectUncheckedCreateWithoutUserInputObjectSchema } from './DefectUncheckedCreateWithoutUserInput.schema';
import { DefectCreateOrConnectWithoutUserInputObjectSchema as DefectCreateOrConnectWithoutUserInputObjectSchema } from './DefectCreateOrConnectWithoutUserInput.schema';
import { DefectUpsertWithWhereUniqueWithoutUserInputObjectSchema as DefectUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './DefectUpsertWithWhereUniqueWithoutUserInput.schema';
import { DefectCreateManyUserInputEnvelopeObjectSchema as DefectCreateManyUserInputEnvelopeObjectSchema } from './DefectCreateManyUserInputEnvelope.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema';
import { DefectUpdateWithWhereUniqueWithoutUserInputObjectSchema as DefectUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './DefectUpdateWithWhereUniqueWithoutUserInput.schema';
import { DefectUpdateManyWithWhereWithoutUserInputObjectSchema as DefectUpdateManyWithWhereWithoutUserInputObjectSchema } from './DefectUpdateManyWithWhereWithoutUserInput.schema';
import { DefectScalarWhereInputObjectSchema as DefectScalarWhereInputObjectSchema } from './DefectScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DefectCreateWithoutUserInputObjectSchema), z.lazy(() => DefectCreateWithoutUserInputObjectSchema).array(), z.lazy(() => DefectUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => DefectUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DefectCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => DefectCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DefectUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => DefectUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DefectCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DefectUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => DefectUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DefectUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => DefectUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DefectScalarWhereInputObjectSchema), z.lazy(() => DefectScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DefectUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.DefectUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUncheckedUpdateManyWithoutUserNestedInput>;
export const DefectUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
