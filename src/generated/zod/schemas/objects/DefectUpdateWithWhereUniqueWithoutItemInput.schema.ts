import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema';
import { DefectUpdateWithoutItemInputObjectSchema as DefectUpdateWithoutItemInputObjectSchema } from './DefectUpdateWithoutItemInput.schema';
import { DefectUncheckedUpdateWithoutItemInputObjectSchema as DefectUncheckedUpdateWithoutItemInputObjectSchema } from './DefectUncheckedUpdateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DefectWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DefectUpdateWithoutItemInputObjectSchema), z.lazy(() => DefectUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
export const DefectUpdateWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.DefectUpdateWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUpdateWithWhereUniqueWithoutItemInput>;
export const DefectUpdateWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
