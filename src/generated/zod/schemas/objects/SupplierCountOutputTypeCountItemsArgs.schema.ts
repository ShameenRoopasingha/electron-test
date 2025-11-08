import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const SupplierCountOutputTypeCountItemsArgsObjectSchema = makeSchema();
export const SupplierCountOutputTypeCountItemsArgsObjectZodSchema = makeSchema();
