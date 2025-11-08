import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemUpdateManyMutationInputObjectSchema as ExpiredItemUpdateManyMutationInputObjectSchema } from './objects/ExpiredItemUpdateManyMutationInput.schema';
import { ExpiredItemWhereInputObjectSchema as ExpiredItemWhereInputObjectSchema } from './objects/ExpiredItemWhereInput.schema';

export const ExpiredItemUpdateManySchema: z.ZodType<Prisma.ExpiredItemUpdateManyArgs> = z.object({ data: ExpiredItemUpdateManyMutationInputObjectSchema, where: ExpiredItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExpiredItemUpdateManyArgs>;

export const ExpiredItemUpdateManyZodSchema = z.object({ data: ExpiredItemUpdateManyMutationInputObjectSchema, where: ExpiredItemWhereInputObjectSchema.optional() }).strict();