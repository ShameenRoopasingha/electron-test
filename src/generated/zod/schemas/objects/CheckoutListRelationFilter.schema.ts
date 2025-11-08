import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CheckoutWhereInputObjectSchema as CheckoutWhereInputObjectSchema } from './CheckoutWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CheckoutWhereInputObjectSchema).optional(),
  some: z.lazy(() => CheckoutWhereInputObjectSchema).optional(),
  none: z.lazy(() => CheckoutWhereInputObjectSchema).optional()
}).strict();
export const CheckoutListRelationFilterObjectSchema: z.ZodType<Prisma.CheckoutListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutListRelationFilter>;
export const CheckoutListRelationFilterObjectZodSchema = makeSchema();
