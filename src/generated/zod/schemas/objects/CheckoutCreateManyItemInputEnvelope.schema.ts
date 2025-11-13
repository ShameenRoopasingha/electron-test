import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutCreateManyItemInputObjectSchema as CheckoutCreateManyItemInputObjectSchema } from './CheckoutCreateManyItemInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CheckoutCreateManyItemInputObjectSchema), z.lazy(() => CheckoutCreateManyItemInputObjectSchema).array()])
}).strict();
export const CheckoutCreateManyItemInputEnvelopeObjectSchema: z.ZodType<Prisma.CheckoutCreateManyItemInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutCreateManyItemInputEnvelope>;
export const CheckoutCreateManyItemInputEnvelopeObjectZodSchema = makeSchema();
