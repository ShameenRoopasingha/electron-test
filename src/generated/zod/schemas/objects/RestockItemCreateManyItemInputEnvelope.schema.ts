import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockItemCreateManyItemInputObjectSchema as RestockItemCreateManyItemInputObjectSchema } from './RestockItemCreateManyItemInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RestockItemCreateManyItemInputObjectSchema), z.lazy(() => RestockItemCreateManyItemInputObjectSchema).array()])
}).strict();
export const RestockItemCreateManyItemInputEnvelopeObjectSchema: z.ZodType<Prisma.RestockItemCreateManyItemInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemCreateManyItemInputEnvelope>;
export const RestockItemCreateManyItemInputEnvelopeObjectZodSchema = makeSchema();
