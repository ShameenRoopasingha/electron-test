import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderWhereInputObjectSchema as ReturnedOrderWhereInputObjectSchema } from './ReturnedOrderWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReturnedOrderWhereInputObjectSchema).optional()
}).strict();
export const BillCountOutputTypeCountReturnedOrdersArgsObjectSchema = makeSchema();
export const BillCountOutputTypeCountReturnedOrdersArgsObjectZodSchema = makeSchema();
