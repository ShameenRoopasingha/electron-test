import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemWhereInputObjectSchema as RestockItemWhereInputObjectSchema } from './objects/RestockItemWhereInput.schema';

export const RestockItemDeleteManySchema: z.ZodType<Prisma.RestockItemDeleteManyArgs> = z.object({ where: RestockItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RestockItemDeleteManyArgs>;

export const RestockItemDeleteManyZodSchema = z.object({ where: RestockItemWhereInputObjectSchema.optional() }).strict();