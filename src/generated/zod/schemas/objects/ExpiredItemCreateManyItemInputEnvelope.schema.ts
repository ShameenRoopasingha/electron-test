import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ExpiredItemCreateManyItemInputObjectSchema as ExpiredItemCreateManyItemInputObjectSchema } from './ExpiredItemCreateManyItemInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ExpiredItemCreateManyItemInputObjectSchema), z.lazy(() => ExpiredItemCreateManyItemInputObjectSchema).array()])
}).strict();
export const ExpiredItemCreateManyItemInputEnvelopeObjectSchema: z.ZodType<Prisma.ExpiredItemCreateManyItemInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemCreateManyItemInputEnvelope>;
export const ExpiredItemCreateManyItemInputEnvelopeObjectZodSchema = makeSchema();
