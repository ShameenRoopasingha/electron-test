import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema';
import { DefectUpdateWithoutUserInputObjectSchema as DefectUpdateWithoutUserInputObjectSchema } from './DefectUpdateWithoutUserInput.schema';
import { DefectUncheckedUpdateWithoutUserInputObjectSchema as DefectUncheckedUpdateWithoutUserInputObjectSchema } from './DefectUncheckedUpdateWithoutUserInput.schema';
import { DefectCreateWithoutUserInputObjectSchema as DefectCreateWithoutUserInputObjectSchema } from './DefectCreateWithoutUserInput.schema';
import { DefectUncheckedCreateWithoutUserInputObjectSchema as DefectUncheckedCreateWithoutUserInputObjectSchema } from './DefectUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DefectWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DefectUpdateWithoutUserInputObjectSchema), z.lazy(() => DefectUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => DefectCreateWithoutUserInputObjectSchema), z.lazy(() => DefectUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const DefectUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.DefectUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUpsertWithWhereUniqueWithoutUserInput>;
export const DefectUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
