import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectScalarWhereInputObjectSchema as DefectScalarWhereInputObjectSchema } from './DefectScalarWhereInput.schema';
import { DefectUpdateManyMutationInputObjectSchema as DefectUpdateManyMutationInputObjectSchema } from './DefectUpdateManyMutationInput.schema';
import { DefectUncheckedUpdateManyWithoutUserInputObjectSchema as DefectUncheckedUpdateManyWithoutUserInputObjectSchema } from './DefectUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DefectScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DefectUpdateManyMutationInputObjectSchema), z.lazy(() => DefectUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const DefectUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.DefectUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectUpdateManyWithWhereWithoutUserInput>;
export const DefectUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
