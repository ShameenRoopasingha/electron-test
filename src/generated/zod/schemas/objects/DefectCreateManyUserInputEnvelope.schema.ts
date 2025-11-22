import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectCreateManyUserInputObjectSchema as DefectCreateManyUserInputObjectSchema } from './DefectCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DefectCreateManyUserInputObjectSchema), z.lazy(() => DefectCreateManyUserInputObjectSchema).array()])
}).strict();
export const DefectCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.DefectCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateManyUserInputEnvelope>;
export const DefectCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
