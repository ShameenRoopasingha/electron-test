import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const RestockItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.RestockItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RestockItemWhereUniqueInput>;
export const RestockItemWhereUniqueInputObjectZodSchema = makeSchema();
