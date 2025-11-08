import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SupplierCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SupplierCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierCountOrderByAggregateInput>;
export const SupplierCountOrderByAggregateInputObjectZodSchema = makeSchema();
