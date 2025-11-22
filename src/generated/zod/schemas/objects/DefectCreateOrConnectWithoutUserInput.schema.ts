import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema';
import { DefectCreateWithoutUserInputObjectSchema as DefectCreateWithoutUserInputObjectSchema } from './DefectCreateWithoutUserInput.schema';
import { DefectUncheckedCreateWithoutUserInputObjectSchema as DefectUncheckedCreateWithoutUserInputObjectSchema } from './DefectUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DefectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DefectCreateWithoutUserInputObjectSchema), z.lazy(() => DefectUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const DefectCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.DefectCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateOrConnectWithoutUserInput>;
export const DefectCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
