import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DefectCreateManyItemInputObjectSchema as DefectCreateManyItemInputObjectSchema } from './DefectCreateManyItemInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DefectCreateManyItemInputObjectSchema), z.lazy(() => DefectCreateManyItemInputObjectSchema).array()])
}).strict();
export const DefectCreateManyItemInputEnvelopeObjectSchema: z.ZodType<Prisma.DefectCreateManyItemInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DefectCreateManyItemInputEnvelope>;
export const DefectCreateManyItemInputEnvelopeObjectZodSchema = makeSchema();
