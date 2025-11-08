import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutCreateManyBillInputObjectSchema as CheckoutCreateManyBillInputObjectSchema } from './CheckoutCreateManyBillInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CheckoutCreateManyBillInputObjectSchema), z.lazy(() => CheckoutCreateManyBillInputObjectSchema).array()])
}).strict();
export const CheckoutCreateManyBillInputEnvelopeObjectSchema: z.ZodType<Prisma.CheckoutCreateManyBillInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutCreateManyBillInputEnvelope>;
export const CheckoutCreateManyBillInputEnvelopeObjectZodSchema = makeSchema();
