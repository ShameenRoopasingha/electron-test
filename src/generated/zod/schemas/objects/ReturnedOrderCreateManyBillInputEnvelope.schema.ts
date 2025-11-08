import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderCreateManyBillInputObjectSchema as ReturnedOrderCreateManyBillInputObjectSchema } from './ReturnedOrderCreateManyBillInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReturnedOrderCreateManyBillInputObjectSchema), z.lazy(() => ReturnedOrderCreateManyBillInputObjectSchema).array()])
}).strict();
export const ReturnedOrderCreateManyBillInputEnvelopeObjectSchema: z.ZodType<Prisma.ReturnedOrderCreateManyBillInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderCreateManyBillInputEnvelope>;
export const ReturnedOrderCreateManyBillInputEnvelopeObjectZodSchema = makeSchema();
