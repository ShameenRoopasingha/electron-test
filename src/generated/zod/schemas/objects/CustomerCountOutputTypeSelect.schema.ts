import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerCountOutputTypeCountBillsArgsObjectSchema as CustomerCountOutputTypeCountBillsArgsObjectSchema } from './CustomerCountOutputTypeCountBillsArgs.schema'

const makeSchema = () => z.object({
  bills: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeCountBillsArgsObjectSchema)]).optional()
}).strict();
export const CustomerCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CustomerCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCountOutputTypeSelect>;
export const CustomerCountOutputTypeSelectObjectZodSchema = makeSchema();
