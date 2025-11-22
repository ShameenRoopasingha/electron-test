import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierArgsObjectSchema as SupplierArgsObjectSchema } from './SupplierArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RestockItemFindManySchema as RestockItemFindManySchema } from '../findManyRestockItem.schema';
import { RestockCountOutputTypeArgsObjectSchema as RestockCountOutputTypeArgsObjectSchema } from './RestockCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  supplier: z.union([z.boolean(), z.lazy(() => SupplierArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => RestockItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RestockCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RestockIncludeObjectSchema: z.ZodType<Prisma.RestockInclude> = makeSchema() as unknown as z.ZodType<Prisma.RestockInclude>;
export const RestockIncludeObjectZodSchema = makeSchema();
