import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemFindManySchema as ItemFindManySchema } from '../findManyItem.schema';
import { RestockFindManySchema as RestockFindManySchema } from '../findManyRestock.schema';
import { SupplierCountOutputTypeArgsObjectSchema as SupplierCountOutputTypeArgsObjectSchema } from './SupplierCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  company: z.boolean().optional(),
  address: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => ItemFindManySchema)]).optional(),
  restocks: z.union([z.boolean(), z.lazy(() => RestockFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SupplierCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SupplierSelectObjectSchema: z.ZodType<Prisma.SupplierSelect> = makeSchema() as unknown as z.ZodType<Prisma.SupplierSelect>;
export const SupplierSelectObjectZodSchema = makeSchema();
