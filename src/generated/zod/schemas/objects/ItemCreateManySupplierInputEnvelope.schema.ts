import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateManySupplierInputObjectSchema as ItemCreateManySupplierInputObjectSchema } from './ItemCreateManySupplierInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ItemCreateManySupplierInputObjectSchema), z.lazy(() => ItemCreateManySupplierInputObjectSchema).array()])
}).strict();
export const ItemCreateManySupplierInputEnvelopeObjectSchema: z.ZodType<Prisma.ItemCreateManySupplierInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateManySupplierInputEnvelope>;
export const ItemCreateManySupplierInputEnvelopeObjectZodSchema = makeSchema();
