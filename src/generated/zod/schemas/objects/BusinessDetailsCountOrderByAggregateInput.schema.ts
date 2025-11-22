import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  registrationNumber: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  logoUrl: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional()
}).strict();
export const BusinessDetailsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BusinessDetailsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsCountOrderByAggregateInput>;
export const BusinessDetailsCountOrderByAggregateInputObjectZodSchema = makeSchema();
