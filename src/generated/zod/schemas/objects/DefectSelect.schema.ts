import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  itemId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  reason: z.boolean().optional(),
  reportedBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
export const DefectSelectObjectSchema: z.ZodType<Prisma.DefectSelect> = makeSchema() as unknown as z.ZodType<Prisma.DefectSelect>;
export const DefectSelectObjectZodSchema = makeSchema();
