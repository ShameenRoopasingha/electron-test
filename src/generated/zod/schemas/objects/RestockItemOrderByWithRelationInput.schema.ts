import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RestockOrderByWithRelationInputObjectSchema as RestockOrderByWithRelationInputObjectSchema } from './RestockOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  restockId: SortOrderSchema.optional(),
  itemId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  quantity: SortOrderSchema.optional(),
  costPrice: SortOrderSchema.optional(),
  restock: z.lazy(() => RestockOrderByWithRelationInputObjectSchema).optional(),
  item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RestockItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RestockItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemOrderByWithRelationInput>;
export const RestockItemOrderByWithRelationInputObjectZodSchema = makeSchema();
