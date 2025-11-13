import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ReturnedOrderWhereUniqueInputObjectSchema: z.ZodType<Prisma.ReturnedOrderWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ReturnedOrderWhereUniqueInput>;
export const ReturnedOrderWhereUniqueInputObjectZodSchema = makeSchema();
