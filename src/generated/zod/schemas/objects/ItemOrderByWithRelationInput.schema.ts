import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CategoryOrderByWithRelationInputObjectSchema as CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { SupplierOrderByWithRelationInputObjectSchema as SupplierOrderByWithRelationInputObjectSchema } from './SupplierOrderByWithRelationInput.schema';
import { CheckoutOrderByRelationAggregateInputObjectSchema as CheckoutOrderByRelationAggregateInputObjectSchema } from './CheckoutOrderByRelationAggregateInput.schema';
import { ReturnedOrderOrderByRelationAggregateInputObjectSchema as ReturnedOrderOrderByRelationAggregateInputObjectSchema } from './ReturnedOrderOrderByRelationAggregateInput.schema';
import { DefectOrderByRelationAggregateInputObjectSchema as DefectOrderByRelationAggregateInputObjectSchema } from './DefectOrderByRelationAggregateInput.schema';
import { ExpiredItemOrderByRelationAggregateInputObjectSchema as ExpiredItemOrderByRelationAggregateInputObjectSchema } from './ExpiredItemOrderByRelationAggregateInput.schema';
import { RestockItemOrderByRelationAggregateInputObjectSchema as RestockItemOrderByRelationAggregateInputObjectSchema } from './RestockItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  manufacturer: SortOrderSchema.optional(),
  supplierId: SortOrderSchema.optional(),
  barcode: SortOrderSchema.optional(),
  costPrice: SortOrderSchema.optional(),
  sellingPrice: SortOrderSchema.optional(),
  quantityInStock: SortOrderSchema.optional(),
  reorder_level: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputObjectSchema).optional(),
  supplier: z.lazy(() => SupplierOrderByWithRelationInputObjectSchema).optional(),
  checkouts: z.lazy(() => CheckoutOrderByRelationAggregateInputObjectSchema).optional(),
  returnedOrders: z.lazy(() => ReturnedOrderOrderByRelationAggregateInputObjectSchema).optional(),
  defects: z.lazy(() => DefectOrderByRelationAggregateInputObjectSchema).optional(),
  expiredItems: z.lazy(() => ExpiredItemOrderByRelationAggregateInputObjectSchema).optional(),
  restockItems: z.lazy(() => RestockItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemOrderByWithRelationInput>;
export const ItemOrderByWithRelationInputObjectZodSchema = makeSchema();
