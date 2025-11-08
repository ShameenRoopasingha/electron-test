import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutWhereInputObjectSchema as CheckoutWhereInputObjectSchema } from './CheckoutWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CheckoutWhereInputObjectSchema).optional()
}).strict();
export const BillCountOutputTypeCountCheckoutsArgsObjectSchema = makeSchema();
export const BillCountOutputTypeCountCheckoutsArgsObjectZodSchema = makeSchema();
