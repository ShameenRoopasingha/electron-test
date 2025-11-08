import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemOrderByRelationAggregateInputObjectSchema as ItemOrderByRelationAggregateInputObjectSchema } from './ItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  items: z.lazy(() => ItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CategoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryOrderByWithRelationInput>;
export const CategoryOrderByWithRelationInputObjectZodSchema = makeSchema();
