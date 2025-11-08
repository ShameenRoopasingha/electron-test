import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ReturnedOrderWhereInputObjectSchema as ReturnedOrderWhereInputObjectSchema } from './ReturnedOrderWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReturnedOrderWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReturnedOrderWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReturnedOrderWhereInputObjectSchema).optional()
}).strict();
export const ReturnedOrderListRelationFilterObjectSchema: z.ZodType<Prisma.ReturnedOrderListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderListRelationFilter>;
export const ReturnedOrderListRelationFilterObjectZodSchema = makeSchema();
