import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemCreateManyUserInputObjectSchema as ExpiredItemCreateManyUserInputObjectSchema } from './ExpiredItemCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ExpiredItemCreateManyUserInputObjectSchema), z.lazy(() => ExpiredItemCreateManyUserInputObjectSchema).array()])
}).strict();
export const ExpiredItemCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ExpiredItemCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateManyUserInputEnvelope>;
export const ExpiredItemCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
