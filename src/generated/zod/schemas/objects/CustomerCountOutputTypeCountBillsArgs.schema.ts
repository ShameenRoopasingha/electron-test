import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BillWhereInputObjectSchema).optional()
}).strict();
export const CustomerCountOutputTypeCountBillsArgsObjectSchema = makeSchema();
export const CustomerCountOutputTypeCountBillsArgsObjectZodSchema = makeSchema();
