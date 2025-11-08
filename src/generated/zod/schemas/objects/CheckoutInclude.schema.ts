import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillArgsObjectSchema as BillArgsObjectSchema } from './BillArgs.schema';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema'

const makeSchema = () => z.object({
  bill: z.union([z.boolean(), z.lazy(() => BillArgsObjectSchema)]).optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
export const CheckoutIncludeObjectSchema: z.ZodType<Prisma.CheckoutInclude> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutInclude>;
export const CheckoutIncludeObjectZodSchema = makeSchema();
