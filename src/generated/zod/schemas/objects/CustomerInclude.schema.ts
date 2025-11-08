import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillFindManySchema as BillFindManySchema } from '../findManyBill.schema';
import { CustomerCountOutputTypeArgsObjectSchema as CustomerCountOutputTypeArgsObjectSchema } from './CustomerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  bills: z.union([z.boolean(), z.lazy(() => BillFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomerIncludeObjectSchema: z.ZodType<Prisma.CustomerInclude> = makeSchema() as unknown as z.ZodType<Prisma.CustomerInclude>;
export const CustomerIncludeObjectZodSchema = makeSchema();
