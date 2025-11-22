import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCreateNestedManyWithoutSupplierInputObjectSchema as ItemCreateNestedManyWithoutSupplierInputObjectSchema } from './ItemCreateNestedManyWithoutSupplierInput.schema';
import { RestockCreateNestedManyWithoutSupplierInputObjectSchema as RestockCreateNestedManyWithoutSupplierInputObjectSchema } from './RestockCreateNestedManyWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  company: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => ItemCreateNestedManyWithoutSupplierInputObjectSchema).optional(),
  restocks: z.lazy(() => RestockCreateNestedManyWithoutSupplierInputObjectSchema).optional()
}).strict();
export const SupplierCreateInputObjectSchema: z.ZodType<Prisma.SupplierCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierCreateInput>;
export const SupplierCreateInputObjectZodSchema = makeSchema();
