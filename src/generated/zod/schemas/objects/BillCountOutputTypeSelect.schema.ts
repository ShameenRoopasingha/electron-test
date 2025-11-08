import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillCountOutputTypeCountCheckoutsArgsObjectSchema as BillCountOutputTypeCountCheckoutsArgsObjectSchema } from './BillCountOutputTypeCountCheckoutsArgs.schema';
import { BillCountOutputTypeCountReturnedOrdersArgsObjectSchema as BillCountOutputTypeCountReturnedOrdersArgsObjectSchema } from './BillCountOutputTypeCountReturnedOrdersArgs.schema'

const makeSchema = () => z.object({
  checkouts: z.union([z.boolean(), z.lazy(() => BillCountOutputTypeCountCheckoutsArgsObjectSchema)]).optional(),
  returnedOrders: z.union([z.boolean(), z.lazy(() => BillCountOutputTypeCountReturnedOrdersArgsObjectSchema)]).optional()
}).strict();
export const BillCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BillCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BillCountOutputTypeSelect>;
export const BillCountOutputTypeSelectObjectZodSchema = makeSchema();
