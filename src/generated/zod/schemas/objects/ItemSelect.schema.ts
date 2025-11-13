import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { SupplierArgsObjectSchema as SupplierArgsObjectSchema } from './SupplierArgs.schema';
import { CheckoutFindManySchema as CheckoutFindManySchema } from '../findManyCheckout.schema';
import { ReturnedOrderFindManySchema as ReturnedOrderFindManySchema } from '../findManyReturnedOrder.schema';
import { DefectFindManySchema as DefectFindManySchema } from '../findManyDefect.schema';
import { ExpiredItemFindManySchema as ExpiredItemFindManySchema } from '../findManyExpiredItem.schema';
import { RestockItemFindManySchema as RestockItemFindManySchema } from '../findManyRestockItem.schema';
import { ItemCountOutputTypeArgsObjectSchema as ItemCountOutputTypeArgsObjectSchema } from './ItemCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  supplierId: z.boolean().optional(),
  barcode: z.boolean().optional(),
  costPrice: z.boolean().optional(),
  sellingPrice: z.boolean().optional(),
  quantityInStock: z.boolean().optional(),
  reorder_level: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  category: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  supplier: z.union([z.boolean(), z.lazy(() => SupplierArgsObjectSchema)]).optional(),
  checkouts: z.union([z.boolean(), z.lazy(() => CheckoutFindManySchema)]).optional(),
  returnedOrders: z.union([z.boolean(), z.lazy(() => ReturnedOrderFindManySchema)]).optional(),
  defects: z.union([z.boolean(), z.lazy(() => DefectFindManySchema)]).optional(),
  expiredItems: z.union([z.boolean(), z.lazy(() => ExpiredItemFindManySchema)]).optional(),
  restockItems: z.union([z.boolean(), z.lazy(() => RestockItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ItemSelectObjectSchema: z.ZodType<Prisma.ItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.ItemSelect>;
export const ItemSelectObjectZodSchema = makeSchema();
