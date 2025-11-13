import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BillOrderByWithRelationInputObjectSchema as BillOrderByWithRelationInputObjectSchema } from './BillOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  itemId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  quantity: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  bill: z.lazy(() => BillOrderByWithRelationInputObjectSchema).optional(),
  item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReturnedOrderOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReturnedOrderOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderOrderByWithRelationInput>;
export const ReturnedOrderOrderByWithRelationInputObjectZodSchema = makeSchema();
