import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CheckoutOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CheckoutOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutOrderByRelationAggregateInput>;
export const CheckoutOrderByRelationAggregateInputObjectZodSchema = makeSchema();
