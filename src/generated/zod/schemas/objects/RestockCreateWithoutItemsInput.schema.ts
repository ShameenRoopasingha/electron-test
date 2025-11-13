import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCreateNestedOneWithoutRestocksInputObjectSchema as SupplierCreateNestedOneWithoutRestocksInputObjectSchema } from './SupplierCreateNestedOneWithoutRestocksInput.schema'

const makeSchema = () => z.object({
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutRestocksInputObjectSchema)
}).strict();
export const RestockCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.RestockCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateWithoutItemsInput>;
export const RestockCreateWithoutItemsInputObjectZodSchema = makeSchema();
