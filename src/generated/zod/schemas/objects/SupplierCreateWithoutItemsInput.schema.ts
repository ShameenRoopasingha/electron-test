import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockCreateNestedManyWithoutSupplierInputObjectSchema as RestockCreateNestedManyWithoutSupplierInputObjectSchema } from './RestockCreateNestedManyWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  company: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  restocks: z.lazy(() => RestockCreateNestedManyWithoutSupplierInputObjectSchema).optional()
}).strict();
export const SupplierCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.SupplierCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierCreateWithoutItemsInput>;
export const SupplierCreateWithoutItemsInputObjectZodSchema = makeSchema();
