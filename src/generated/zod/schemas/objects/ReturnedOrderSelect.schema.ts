import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillArgsObjectSchema as BillArgsObjectSchema } from './BillArgs.schema';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  billId: z.boolean().optional(),
  itemId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  reason: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  bill: z.union([z.boolean(), z.lazy(() => BillArgsObjectSchema)]).optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
export const ReturnedOrderSelectObjectSchema: z.ZodType<Prisma.ReturnedOrderSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderSelect>;
export const ReturnedOrderSelectObjectZodSchema = makeSchema();
