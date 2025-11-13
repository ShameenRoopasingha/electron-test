import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectCreateWithoutItemInputObjectSchema as DefectCreateWithoutItemInputObjectSchema } from './DefectCreateWithoutItemInput.schema';
import { DefectUncheckedCreateWithoutItemInputObjectSchema as DefectUncheckedCreateWithoutItemInputObjectSchema } from './DefectUncheckedCreateWithoutItemInput.schema';
import { DefectCreateOrConnectWithoutItemInputObjectSchema as DefectCreateOrConnectWithoutItemInputObjectSchema } from './DefectCreateOrConnectWithoutItemInput.schema';
import { DefectCreateManyItemInputEnvelopeObjectSchema as DefectCreateManyItemInputEnvelopeObjectSchema } from './DefectCreateManyItemInputEnvelope.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DefectCreateWithoutItemInputObjectSchema), z.lazy(() => DefectCreateWithoutItemInputObjectSchema).array(), z.lazy(() => DefectUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => DefectUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DefectCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => DefectCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DefectCreateManyItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DefectUncheckedCreateNestedManyWithoutItemInputObjectSchema: z.ZodType<Prisma.DefectUncheckedCreateNestedManyWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUncheckedCreateNestedManyWithoutItemInput>;
export const DefectUncheckedCreateNestedManyWithoutItemInputObjectZodSchema = makeSchema();
