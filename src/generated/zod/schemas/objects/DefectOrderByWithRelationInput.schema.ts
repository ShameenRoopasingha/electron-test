import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  quantity: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  reportedBy: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DefectOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DefectOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DefectOrderByWithRelationInput>;
export const DefectOrderByWithRelationInputObjectZodSchema = makeSchema();
