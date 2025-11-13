import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderUpdateManyMutationInputObjectSchema as ReturnedOrderUpdateManyMutationInputObjectSchema } from './objects/ReturnedOrderUpdateManyMutationInput.schema';
import { ReturnedOrderWhereInputObjectSchema as ReturnedOrderWhereInputObjectSchema } from './objects/ReturnedOrderWhereInput.schema';

export const ReturnedOrderUpdateManySchema: z.ZodType<Prisma.ReturnedOrderUpdateManyArgs> = z.object({ data: ReturnedOrderUpdateManyMutationInputObjectSchema, where: ReturnedOrderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderUpdateManyArgs>;

export const ReturnedOrderUpdateManyZodSchema = z.object({ data: ReturnedOrderUpdateManyMutationInputObjectSchema, where: ReturnedOrderWhereInputObjectSchema.optional() }).strict();