import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectWhereUniqueInputObjectSchema as DefectWhereUniqueInputObjectSchema } from './DefectWhereUniqueInput.schema';
import { DefectCreateWithoutItemInputObjectSchema as DefectCreateWithoutItemInputObjectSchema } from './DefectCreateWithoutItemInput.schema';
import { DefectUncheckedCreateWithoutItemInputObjectSchema as DefectUncheckedCreateWithoutItemInputObjectSchema } from './DefectUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DefectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DefectCreateWithoutItemInputObjectSchema), z.lazy(() => DefectUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const DefectCreateOrConnectWithoutItemInputObjectSchema: z.ZodType<Prisma.DefectCreateOrConnectWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateOrConnectWithoutItemInput>;
export const DefectCreateOrConnectWithoutItemInputObjectZodSchema = makeSchema();
