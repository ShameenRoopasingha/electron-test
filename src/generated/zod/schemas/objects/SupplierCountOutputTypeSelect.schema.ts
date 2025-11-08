import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SupplierCountOutputTypeCountItemsArgsObjectSchema as SupplierCountOutputTypeCountItemsArgsObjectSchema } from './SupplierCountOutputTypeCountItemsArgs.schema';
import { SupplierCountOutputTypeCountRestocksArgsObjectSchema as SupplierCountOutputTypeCountRestocksArgsObjectSchema } from './SupplierCountOutputTypeCountRestocksArgs.schema'

const makeSchema = () => z.object({
  items: z.union([z.boolean(), z.lazy(() => SupplierCountOutputTypeCountItemsArgsObjectSchema)]).optional(),
  restocks: z.union([z.boolean(), z.lazy(() => SupplierCountOutputTypeCountRestocksArgsObjectSchema)]).optional()
}).strict();
export const SupplierCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SupplierCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SupplierCountOutputTypeSelect>;
export const SupplierCountOutputTypeSelectObjectZodSchema = makeSchema();
