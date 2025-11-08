import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderWhereInputObjectSchema as ReturnedOrderWhereInputObjectSchema } from './objects/ReturnedOrderWhereInput.schema';

export const ReturnedOrderDeleteManySchema: z.ZodType<Prisma.ReturnedOrderDeleteManyArgs> = z.object({ where: ReturnedOrderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderDeleteManyArgs>;

export const ReturnedOrderDeleteManyZodSchema = z.object({ where: ReturnedOrderWhereInputObjectSchema.optional() }).strict();