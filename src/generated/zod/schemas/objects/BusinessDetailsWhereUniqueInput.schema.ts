import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  ownerId: z.number().int().optional()
}).strict();
export const BusinessDetailsWhereUniqueInputObjectSchema: z.ZodType<Prisma.BusinessDetailsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsWhereUniqueInput>;
export const BusinessDetailsWhereUniqueInputObjectZodSchema = makeSchema();
