import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutRestocksInputObjectSchema as UserCreateNestedOneWithoutRestocksInputObjectSchema } from './UserCreateNestedOneWithoutRestocksInput.schema';
import { RestockItemCreateNestedManyWithoutRestockInputObjectSchema as RestockItemCreateNestedManyWithoutRestockInputObjectSchema } from './RestockItemCreateNestedManyWithoutRestockInput.schema'

const makeSchema = () => z.object({
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRestocksInputObjectSchema),
  items: z.lazy(() => RestockItemCreateNestedManyWithoutRestockInputObjectSchema).optional()
}).strict();
export const RestockCreateWithoutSupplierInputObjectSchema: z.ZodType<Prisma.RestockCreateWithoutSupplierInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockCreateWithoutSupplierInput>;
export const RestockCreateWithoutSupplierInputObjectZodSchema = makeSchema();
