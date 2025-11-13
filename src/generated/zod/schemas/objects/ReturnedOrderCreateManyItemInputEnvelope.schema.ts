import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderCreateManyItemInputObjectSchema as ReturnedOrderCreateManyItemInputObjectSchema } from './ReturnedOrderCreateManyItemInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReturnedOrderCreateManyItemInputObjectSchema), z.lazy(() => ReturnedOrderCreateManyItemInputObjectSchema).array()])
}).strict();
export const ReturnedOrderCreateManyItemInputEnvelopeObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateManyItemInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateManyItemInputEnvelope>;
export const ReturnedOrderCreateManyItemInputEnvelopeObjectZodSchema = makeSchema();
