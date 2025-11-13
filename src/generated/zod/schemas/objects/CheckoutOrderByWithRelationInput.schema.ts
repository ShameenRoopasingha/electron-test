import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BillOrderByWithRelationInputObjectSchema as BillOrderByWithRelationInputObjectSchema } from './BillOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  payedAmount: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  bill: z.lazy(() => BillOrderByWithRelationInputObjectSchema).optional(),
  item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CheckoutOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CheckoutOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutOrderByWithRelationInput>;
export const CheckoutOrderByWithRelationInputObjectZodSchema = makeSchema();
