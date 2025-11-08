import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemWhereInputObjectSchema as ExpiredItemWhereInputObjectSchema } from './objects/ExpiredItemWhereInput.schema';

export const ExpiredItemDeleteManySchema: z.ZodType<Prisma.ExpiredItemDeleteManyArgs> = z.object({ where: ExpiredItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExpiredItemDeleteManyArgs>;

export const ExpiredItemDeleteManyZodSchema = z.object({ where: ExpiredItemWhereInputObjectSchema.optional() }).strict();