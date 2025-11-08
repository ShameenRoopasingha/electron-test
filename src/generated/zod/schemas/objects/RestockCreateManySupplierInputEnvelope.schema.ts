import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateManySupplierInputObjectSchema as RestockCreateManySupplierInputObjectSchema } from './RestockCreateManySupplierInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RestockCreateManySupplierInputObjectSchema), z.lazy(() => RestockCreateManySupplierInputObjectSchema).array()])
}).strict();
export const RestockCreateManySupplierInputEnvelopeObjectSchema: z.ZodType<Prisma.RestockCreateManySupplierInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateManySupplierInputEnvelope>;
export const RestockCreateManySupplierInputEnvelopeObjectZodSchema = makeSchema();
