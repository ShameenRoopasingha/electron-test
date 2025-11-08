import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillFindManySchema as BillFindManySchema } from '../findManyBill.schema';
import { CustomerCountOutputTypeArgsObjectSchema as CustomerCountOutputTypeArgsObjectSchema } from './CustomerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  address: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  bills: z.union([z.boolean(), z.lazy(() => BillFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomerSelectObjectSchema: z.ZodType<Prisma.CustomerSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSelect>;
export const CustomerSelectObjectZodSchema = makeSchema();
