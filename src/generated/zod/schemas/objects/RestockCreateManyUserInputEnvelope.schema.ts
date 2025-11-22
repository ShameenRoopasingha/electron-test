import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateManyUserInputObjectSchema as RestockCreateManyUserInputObjectSchema } from './RestockCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RestockCreateManyUserInputObjectSchema), z.lazy(() => RestockCreateManyUserInputObjectSchema).array()])
}).strict();
export const RestockCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.RestockCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateManyUserInputEnvelope>;
export const RestockCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
