import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillUpdateManyMutationInputObjectSchema as BillUpdateManyMutationInputObjectSchema } from './objects/BillUpdateManyMutationInput.schema';
import { BillWhereInputObjectSchema as BillWhereInputObjectSchema } from './objects/BillWhereInput.schema';

export const BillUpdateManySchema: z.ZodType<Prisma.BillUpdateManyArgs> = z.object({ data: BillUpdateManyMutationInputObjectSchema, where: BillWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillUpdateManyArgs>;

export const BillUpdateManyZodSchema = z.object({ data: BillUpdateManyMutationInputObjectSchema, where: BillWhereInputObjectSchema.optional() }).strict();