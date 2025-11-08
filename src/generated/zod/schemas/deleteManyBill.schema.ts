import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './objects/BillWhereInput.schema';

export const BillDeleteManySchema: z.ZodType<Prisma.BillDeleteManyArgs> = z.object({ where: BillWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillDeleteManyArgs>;

export const BillDeleteManyZodSchema = z.object({ where: BillWhereInputObjectSchema.optional() }).strict();