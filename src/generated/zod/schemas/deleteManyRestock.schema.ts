import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './objects/RestockWhereInput.schema';

export const RestockDeleteManySchema: z.ZodType<Prisma.RestockDeleteManyArgs> = z.object({ where: RestockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RestockDeleteManyArgs>;

export const RestockDeleteManyZodSchema = z.object({ where: RestockWhereInputObjectSchema.optional() }).strict();