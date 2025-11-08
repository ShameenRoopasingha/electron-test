import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectScalarWhereInputObjectSchema as DefectScalarWhereInputObjectSchema } from './DefectScalarWhereInput.schema';
import { DefectUpdateManyMutationInputObjectSchema as DefectUpdateManyMutationInputObjectSchema } from './DefectUpdateManyMutationInput.schema';
import { DefectUncheckedUpdateManyWithoutItemInputObjectSchema as DefectUncheckedUpdateManyWithoutItemInputObjectSchema } from './DefectUncheckedUpdateManyWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DefectScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DefectUpdateManyMutationInputObjectSchema), z.lazy(() => DefectUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();
export const DefectUpdateManyWithWhereWithoutItemInputObjectSchema: z.ZodType<Prisma.DefectUpdateManyWithWhereWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUpdateManyWithWhereWithoutItemInput>;
export const DefectUpdateManyWithWhereWithoutItemInputObjectZodSchema = makeSchema();
