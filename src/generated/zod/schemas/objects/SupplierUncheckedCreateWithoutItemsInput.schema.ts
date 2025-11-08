import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockUncheckedCreateNestedManyWithoutSupplierInputObjectSchema as RestockUncheckedCreateNestedManyWithoutSupplierInputObjectSchema } from './RestockUncheckedCreateNestedManyWithoutSupplierInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  company: z.string(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  restocks: z.lazy(() => RestockUncheckedCreateNestedManyWithoutSupplierInputObjectSchema).optional()
}).strict();
export const SupplierUncheckedCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.SupplierUncheckedCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierUncheckedCreateWithoutItemsInput>;
export const SupplierUncheckedCreateWithoutItemsInputObjectZodSchema = makeSchema();
