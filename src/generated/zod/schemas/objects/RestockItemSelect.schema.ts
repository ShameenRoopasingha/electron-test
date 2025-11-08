import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockArgsObjectSchema as RestockArgsObjectSchema } from './RestockArgs.schema';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  restockId: z.boolean().optional(),
  itemId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  costPrice: z.boolean().optional(),
  restock: z.union([z.boolean(), z.lazy(() => RestockArgsObjectSchema)]).optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
export const RestockItemSelectObjectSchema: z.ZodType<Prisma.RestockItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemSelect>;
export const RestockItemSelectObjectZodSchema = makeSchema();
