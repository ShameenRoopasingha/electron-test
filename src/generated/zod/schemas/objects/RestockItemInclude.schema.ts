import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockArgsObjectSchema as RestockArgsObjectSchema } from './RestockArgs.schema';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema'

const makeSchema = () => z.object({
  restock: z.union([z.boolean(), z.lazy(() => RestockArgsObjectSchema)]).optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
export const RestockItemIncludeObjectSchema: z.ZodType<Prisma.RestockItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemInclude>;
export const RestockItemIncludeObjectZodSchema = makeSchema();
