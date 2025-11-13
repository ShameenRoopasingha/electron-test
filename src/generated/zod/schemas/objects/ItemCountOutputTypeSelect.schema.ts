import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemCountOutputTypeCountCheckoutsArgsObjectSchema as ItemCountOutputTypeCountCheckoutsArgsObjectSchema } from './ItemCountOutputTypeCountCheckoutsArgs.schema';
import { ItemCountOutputTypeCountReturnedOrdersArgsObjectSchema as ItemCountOutputTypeCountReturnedOrdersArgsObjectSchema } from './ItemCountOutputTypeCountReturnedOrdersArgs.schema';
import { ItemCountOutputTypeCountDefectsArgsObjectSchema as ItemCountOutputTypeCountDefectsArgsObjectSchema } from './ItemCountOutputTypeCountDefectsArgs.schema';
import { ItemCountOutputTypeCountExpiredItemsArgsObjectSchema as ItemCountOutputTypeCountExpiredItemsArgsObjectSchema } from './ItemCountOutputTypeCountExpiredItemsArgs.schema';
import { ItemCountOutputTypeCountRestockItemsArgsObjectSchema as ItemCountOutputTypeCountRestockItemsArgsObjectSchema } from './ItemCountOutputTypeCountRestockItemsArgs.schema'

const makeSchema = () => z.object({
  checkouts: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeCountCheckoutsArgsObjectSchema)]).optional(),
  returnedOrders: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeCountReturnedOrdersArgsObjectSchema)]).optional(),
  defects: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeCountDefectsArgsObjectSchema)]).optional(),
  expiredItems: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeCountExpiredItemsArgsObjectSchema)]).optional(),
  restockItems: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeCountRestockItemsArgsObjectSchema)]).optional()
}).strict();
export const ItemCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ItemCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ItemCountOutputTypeSelect>;
export const ItemCountOutputTypeSelectObjectZodSchema = makeSchema();
