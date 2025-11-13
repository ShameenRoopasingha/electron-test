import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutSelectObjectSchema as CheckoutSelectObjectSchema } from './CheckoutSelect.schema';
import { CheckoutIncludeObjectSchema as CheckoutIncludeObjectSchema } from './CheckoutInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CheckoutSelectObjectSchema).optional(),
  include: z.lazy(() => CheckoutIncludeObjectSchema).optional()
}).strict();
export const CheckoutArgsObjectSchema = makeSchema();
export const CheckoutArgsObjectZodSchema = makeSchema();
