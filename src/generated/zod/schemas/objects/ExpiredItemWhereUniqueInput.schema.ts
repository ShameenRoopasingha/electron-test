import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ExpiredItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.ExpiredItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ExpiredItemWhereUniqueInput>;
export const ExpiredItemWhereUniqueInputObjectZodSchema = makeSchema();
