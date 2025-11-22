import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema';
import { DefectUpdateWithoutUserInputObjectSchema as DefectUpdateWithoutUserInputObjectSchema } from './DefectUpdateWithoutUserInput.schema';
import { DefectUncheckedUpdateWithoutUserInputObjectSchema as DefectUncheckedUpdateWithoutUserInputObjectSchema } from './DefectUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DefectWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DefectUpdateWithoutUserInputObjectSchema), z.lazy(() => DefectUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const DefectUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.DefectUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUpdateWithWhereUniqueWithoutUserInput>;
export const DefectUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
