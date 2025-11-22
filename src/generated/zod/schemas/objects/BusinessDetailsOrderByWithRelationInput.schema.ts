import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  registrationNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BusinessDetailsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BusinessDetailsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsOrderByWithRelationInput>;
export const BusinessDetailsOrderByWithRelationInputObjectZodSchema = makeSchema();
