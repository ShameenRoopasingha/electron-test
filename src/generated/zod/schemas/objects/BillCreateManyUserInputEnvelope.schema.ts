import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateManyUserInputObjectSchema as BillCreateManyUserInputObjectSchema } from './BillCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BillCreateManyUserInputObjectSchema), z.lazy(() => BillCreateManyUserInputObjectSchema).array()])
}).strict();
export const BillCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.BillCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateManyUserInputEnvelope>;
export const BillCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
