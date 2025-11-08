import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockUpdateManyMutationInputObjectSchema as RestockUpdateManyMutationInputObjectSchema } from './objects/RestockUpdateManyMutationInput.schema';
import { RestockWhereInputObjectSchema as RestockWhereInputObjectSchema } from './objects/RestockWhereInput.schema';

export const RestockUpdateManySchema: z.ZodType<Prisma.RestockUpdateManyArgs> = z.object({ data: RestockUpdateManyMutationInputObjectSchema, where: RestockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RestockUpdateManyArgs>;

export const RestockUpdateManyZodSchema = z.object({ data: RestockUpdateManyMutationInputObjectSchema, where: RestockWhereInputObjectSchema.optional() }).strict();