import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemFindManySchema as ItemFindManySchema } from '../findManyItem.schema';
import { RestockFindManySchema as RestockFindManySchema } from '../findManyRestock.schema';
import { SupplierCountOutputTypeArgsObjectSchema as SupplierCountOutputTypeArgsObjectSchema } from './SupplierCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  items: z.union([z.boolean(), z.lazy(() => ItemFindManySchema)]).optional(),
  restocks: z.union([z.boolean(), z.lazy(() => RestockFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SupplierCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SupplierIncludeObjectSchema: z.ZodType<Prisma.SupplierInclude> = makeSchema() as unknown as z.ZodType<Prisma.SupplierInclude>;
export const SupplierIncludeObjectZodSchema = makeSchema();
