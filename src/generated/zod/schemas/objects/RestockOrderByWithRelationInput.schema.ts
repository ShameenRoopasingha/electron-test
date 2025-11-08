import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SupplierOrderByWithRelationInputObjectSchema as SupplierOrderByWithRelationInputObjectSchema } from './SupplierOrderByWithRelationInput.schema';
import { RestockItemOrderByRelationAggregateInputObjectSchema as RestockItemOrderByRelationAggregateInputObjectSchema } from './RestockItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  supplierId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  totalCost: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  supplier: z.lazy(() => SupplierOrderByWithRelationInputObjectSchema).optional(),
  items: z.lazy(() => RestockItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const RestockOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RestockOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockOrderByWithRelationInput>;
export const RestockOrderByWithRelationInputObjectZodSchema = makeSchema();
