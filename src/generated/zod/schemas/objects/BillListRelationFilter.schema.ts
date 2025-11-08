import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './BillWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BillWhereInputObjectSchema).optional(),
  some: z.lazy(() => BillWhereInputObjectSchema).optional(),
  none: z.lazy(() => BillWhereInputObjectSchema).optional()
}).strict();
export const BillListRelationFilterObjectSchema: z.ZodType<Prisma.BillListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BillListRelationFilter>;
export const BillListRelationFilterObjectZodSchema = makeSchema();
