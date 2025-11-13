import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const CheckoutWhereUniqueInputObjectSchema: z.ZodType<Prisma.CheckoutWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CheckoutWhereUniqueInput>;
export const CheckoutWhereUniqueInputObjectZodSchema = makeSchema();
