import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './RestockWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RestockWhereInputObjectSchema).optional()
}).strict();
export const SupplierCountOutputTypeCountRestocksArgsObjectSchema = makeSchema();
export const SupplierCountOutputTypeCountRestocksArgsObjectZodSchema = makeSchema();
