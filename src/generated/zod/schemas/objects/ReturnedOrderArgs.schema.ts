import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderSelectObjectSchema as ReturnedOrderSelectObjectSchema } from './ReturnedOrderSelect.schema';
import { ReturnedOrderIncludeObjectSchema as ReturnedOrderIncludeObjectSchema } from './ReturnedOrderInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReturnedOrderSelectObjectSchema).optional(),
  include: z.lazy(() => ReturnedOrderIncludeObjectSchema).optional()
}).strict();
export const ReturnedOrderArgsObjectSchema = makeSchema();
export const ReturnedOrderArgsObjectZodSchema = makeSchema();
