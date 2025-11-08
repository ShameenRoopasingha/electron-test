import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCreateNestedOneWithoutRestocksInputObjectSchema as SupplierCreateNestedOneWithoutRestocksInputObjectSchema } from './SupplierCreateNestedOneWithoutRestocksInput.schema';
import { RestockItemCreateNestedManyWithoutRestockInputObjectSchema as RestockItemCreateNestedManyWithoutRestockInputObjectSchema } from './RestockItemCreateNestedManyWithoutRestockInput.schema'

const makeSchema = () => z.object({
  userId: z.number().int(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutRestocksInputObjectSchema),
  items: z.lazy(() => RestockItemCreateNestedManyWithoutRestockInputObjectSchema)
}).strict();
export const RestockCreateInputObjectSchema: z.ZodType<Prisma.RestockCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateInput>;
export const RestockCreateInputObjectZodSchema = makeSchema();
