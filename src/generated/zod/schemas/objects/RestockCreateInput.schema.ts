import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCreateNestedOneWithoutRestocksInputObjectSchema as SupplierCreateNestedOneWithoutRestocksInputObjectSchema } from './SupplierCreateNestedOneWithoutRestocksInput.schema';
import { UserCreateNestedOneWithoutRestocksInputObjectSchema as UserCreateNestedOneWithoutRestocksInputObjectSchema } from './UserCreateNestedOneWithoutRestocksInput.schema';
import { RestockItemCreateNestedManyWithoutRestockInputObjectSchema as RestockItemCreateNestedManyWithoutRestockInputObjectSchema } from './RestockItemCreateNestedManyWithoutRestockInput.schema'

const makeSchema = () => z.object({
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutRestocksInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRestocksInputObjectSchema),
  items: z.lazy(() => RestockItemCreateNestedManyWithoutRestockInputObjectSchema).optional()
}).strict();
export const RestockCreateInputObjectSchema: z.ZodType<Prisma.RestockCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateInput>;
export const RestockCreateInputObjectZodSchema = makeSchema();
