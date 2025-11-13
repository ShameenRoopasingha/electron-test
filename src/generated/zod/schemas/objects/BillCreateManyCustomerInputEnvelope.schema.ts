import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCreateManyCustomerInputObjectSchema as BillCreateManyCustomerInputObjectSchema } from './BillCreateManyCustomerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BillCreateManyCustomerInputObjectSchema), z.lazy(() => BillCreateManyCustomerInputObjectSchema).array()])
}).strict();
export const BillCreateManyCustomerInputEnvelopeObjectSchema: z.ZodType<Prisma.BillCreateManyCustomerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BillCreateManyCustomerInputEnvelope>;
export const BillCreateManyCustomerInputEnvelopeObjectZodSchema = makeSchema();
