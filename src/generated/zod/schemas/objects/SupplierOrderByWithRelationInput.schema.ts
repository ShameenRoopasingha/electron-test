import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemOrderByRelationAggregateInputObjectSchema as ItemOrderByRelationAggregateInputObjectSchema } from './ItemOrderByRelationAggregateInput.schema';
import { RestockOrderByRelationAggregateInputObjectSchema as RestockOrderByRelationAggregateInputObjectSchema } from './RestockOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  items: z.lazy(() => ItemOrderByRelationAggregateInputObjectSchema).optional(),
  restocks: z.lazy(() => RestockOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SupplierOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SupplierOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierOrderByWithRelationInput>;
export const SupplierOrderByWithRelationInputObjectZodSchema = makeSchema();
