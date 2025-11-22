import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BusinessDetailsWhereInputObjectSchema as BusinessDetailsWhereInputObjectSchema } from './objects/BusinessDetailsWhereInput.schema';

export const BusinessDetailsDeleteManySchema: z.ZodType<Prisma.BusinessDetailsDeleteManyArgs> = z.object({ where: BusinessDetailsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsDeleteManyArgs>;

export const BusinessDetailsDeleteManyZodSchema = z.object({ where: BusinessDetailsWhereInputObjectSchema.optional() }).strict();