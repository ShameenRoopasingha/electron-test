import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectUpdateManyMutationInputObjectSchema as DefectUpdateManyMutationInputObjectSchema } from './objects/DefectUpdateManyMutationInput.schema';
import { DefectWhereInputObjectSchema as DefectWhereInputObjectSchema } from './objects/DefectWhereInput.schema';

export const DefectUpdateManySchema: z.ZodType<Prisma.DefectUpdateManyArgs> = z.object({ data: DefectUpdateManyMutationInputObjectSchema, where: DefectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DefectUpdateManyArgs>;

export const DefectUpdateManyZodSchema = z.object({ data: DefectUpdateManyMutationInputObjectSchema, where: DefectWhereInputObjectSchema.optional() }).strict();