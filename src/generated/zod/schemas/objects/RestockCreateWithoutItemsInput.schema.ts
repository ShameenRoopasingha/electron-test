import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCreateNestedOneWithoutRestocksInputObjectSchema as SupplierCreateNestedOneWithoutRestocksInputObjectSchema } from './SupplierCreateNestedOneWithoutRestocksInput.schema';
import { UserCreateNestedOneWithoutRestocksInputObjectSchema as UserCreateNestedOneWithoutRestocksInputObjectSchema } from './UserCreateNestedOneWithoutRestocksInput.schema'

const makeSchema = () => z.object({
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutRestocksInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRestocksInputObjectSchema)
}).strict();
export const RestockCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.RestockCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateWithoutItemsInput>;
export const RestockCreateWithoutItemsInputObjectZodSchema = makeSchema();
