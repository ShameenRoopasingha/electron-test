import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCreateNestedOneWithoutRestocksInputObjectSchema as SupplierCreateNestedOneWithoutRestocksInputObjectSchema } from './SupplierCreateNestedOneWithoutRestocksInput.schema';
import { RestockItemCreateNestedManyWithoutRestockInputObjectSchema as RestockItemCreateNestedManyWithoutRestockInputObjectSchema } from './RestockItemCreateNestedManyWithoutRestockInput.schema'

const makeSchema = () => z.object({
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutRestocksInputObjectSchema),
  items: z.lazy(() => RestockItemCreateNestedManyWithoutRestockInputObjectSchema).optional()
}).strict();
export const RestockCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.RestockCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateWithoutUserInput>;
export const RestockCreateWithoutUserInputObjectZodSchema = makeSchema();
