import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BillOrderByRelationAggregateInputObjectSchema as BillOrderByRelationAggregateInputObjectSchema } from './BillOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  bills: z.lazy(() => BillOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CustomerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CustomerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerOrderByWithRelationInput>;
export const CustomerOrderByWithRelationInputObjectZodSchema = makeSchema();
