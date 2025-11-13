import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectCreateWithoutItemInputObjectSchema as DefectCreateWithoutItemInputObjectSchema } from './DefectCreateWithoutItemInput.schema';
import { DefectUncheckedCreateWithoutItemInputObjectSchema as DefectUncheckedCreateWithoutItemInputObjectSchema } from './DefectUncheckedCreateWithoutItemInput.schema';
import { DefectCreateOrConnectWithoutItemInputObjectSchema as DefectCreateOrConnectWithoutItemInputObjectSchema } from './DefectCreateOrConnectWithoutItemInput.schema';
import { DefectUpsertWithWhereUniqueWithoutItemInputObjectSchema as DefectUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './DefectUpsertWithWhereUniqueWithoutItemInput.schema';
import { DefectCreateManyItemInputEnvelopeObjectSchema as DefectCreateManyItemInputEnvelopeObjectSchema } from './DefectCreateManyItemInputEnvelope.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema';
import { DefectUpdateWithWhereUniqueWithoutItemInputObjectSchema as DefectUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './DefectUpdateWithWhereUniqueWithoutItemInput.schema';
import { DefectUpdateManyWithWhereWithoutItemInputObjectSchema as DefectUpdateManyWithWhereWithoutItemInputObjectSchema } from './DefectUpdateManyWithWhereWithoutItemInput.schema';
import { DefectScalarWhereInputObjectSchema as DefectScalarWhereInputObjectSchema } from './DefectScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DefectCreateWithoutItemInputObjectSchema), z.lazy(() => DefectCreateWithoutItemInputObjectSchema).array(), z.lazy(() => DefectUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => DefectUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DefectCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => DefectCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DefectUpsertWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => DefectUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DefectCreateManyItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DefectUpdateWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => DefectUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DefectUpdateManyWithWhereWithoutItemInputObjectSchema), z.lazy(() => DefectUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DefectScalarWhereInputObjectSchema), z.lazy(() => DefectScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DefectUpdateManyWithoutItemNestedInputObjectSchema: z.ZodType<Prisma.DefectUpdateManyWithoutItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUpdateManyWithoutItemNestedInput>;
export const DefectUpdateManyWithoutItemNestedInputObjectZodSchema = makeSchema();
