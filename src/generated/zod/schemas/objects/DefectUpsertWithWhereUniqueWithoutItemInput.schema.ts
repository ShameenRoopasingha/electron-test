import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema';
import { DefectUpdateWithoutItemInputObjectSchema as DefectUpdateWithoutItemInputObjectSchema } from './DefectUpdateWithoutItemInput.schema';
import { DefectUncheckedUpdateWithoutItemInputObjectSchema as DefectUncheckedUpdateWithoutItemInputObjectSchema } from './DefectUncheckedUpdateWithoutItemInput.schema';
import { DefectCreateWithoutItemInputObjectSchema as DefectCreateWithoutItemInputObjectSchema } from './DefectCreateWithoutItemInput.schema';
import { DefectUncheckedCreateWithoutItemInputObjectSchema as DefectUncheckedCreateWithoutItemInputObjectSchema } from './DefectUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DefectWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DefectUpdateWithoutItemInputObjectSchema), z.lazy(() => DefectUncheckedUpdateWithoutItemInputObjectSchema)]),
  create: z.union([z.lazy(() => DefectCreateWithoutItemInputObjectSchema), z.lazy(() => DefectUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const DefectUpsertWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.DefectUpsertWithWhereUniqueWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUpsertWithWhereUniqueWithoutItemInput>;
export const DefectUpsertWithWhereUniqueWithoutItemInputObjectZodSchema = makeSchema();
