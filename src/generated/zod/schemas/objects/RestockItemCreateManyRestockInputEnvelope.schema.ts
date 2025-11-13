import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemCreateManyRestockInputObjectSchema as RestockItemCreateManyRestockInputObjectSchema } from './RestockItemCreateManyRestockInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RestockItemCreateManyRestockInputObjectSchema), z.lazy(() => RestockItemCreateManyRestockInputObjectSchema).array()])
}).strict();
export const RestockItemCreateManyRestockInputEnvelopeObjectSchema: z.ZodType<Prisma.RestockItemCreateManyRestockInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateManyRestockInputEnvelope>;
export const RestockItemCreateManyRestockInputEnvelopeObjectZodSchema = makeSchema();
