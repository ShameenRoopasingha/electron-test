import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectCreateWithoutUserInputObjectSchema as DefectCreateWithoutUserInputObjectSchema } from './DefectCreateWithoutUserInput.schema';
import { DefectUncheckedCreateWithoutUserInputObjectSchema as DefectUncheckedCreateWithoutUserInputObjectSchema } from './DefectUncheckedCreateWithoutUserInput.schema';
import { DefectCreateOrConnectWithoutUserInputObjectSchema as DefectCreateOrConnectWithoutUserInputObjectSchema } from './DefectCreateOrConnectWithoutUserInput.schema';
import { DefectCreateManyUserInputEnvelopeObjectSchema as DefectCreateManyUserInputEnvelopeObjectSchema } from './DefectCreateManyUserInputEnvelope.schema';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DefectCreateWithoutUserInputObjectSchema), z.lazy(() => DefectCreateWithoutUserInputObjectSchema).array(), z.lazy(() => DefectUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => DefectUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DefectCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => DefectCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DefectCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DefectWhereUniqueInputObjectSchema), z.lazy(() => DefectWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DefectCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.DefectCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateNestedManyWithoutUserInput>;
export const DefectCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
