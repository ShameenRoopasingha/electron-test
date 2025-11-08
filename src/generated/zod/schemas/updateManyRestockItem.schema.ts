import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemUpdateManyMutationInputObjectSchema as RestockItemUpdateManyMutationInputObjectSchema } from './objects/RestockItemUpdateManyMutationInput.schema';
import { RestockItemWhereInputObjectSchema as RestockItemWhereInputObjectSchema } from './objects/RestockItemWhereInput.schema';

export const RestockItemUpdateManySchema: z.ZodType<Prisma.RestockItemUpdateManyArgs> = z.object({ data: RestockItemUpdateManyMutationInputObjectSchema, where: RestockItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RestockItemUpdateManyArgs>;

export const RestockItemUpdateManyZodSchema = z.object({ data: RestockItemUpdateManyMutationInputObjectSchema, where: RestockItemWhereInputObjectSchema.optional() }).strict();