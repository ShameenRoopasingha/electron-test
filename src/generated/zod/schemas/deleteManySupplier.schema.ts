import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';

export const SupplierDeleteManySchema: z.ZodType<Prisma.SupplierDeleteManyArgs> = z.object({ where: SupplierWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SupplierDeleteManyArgs>;

export const SupplierDeleteManyZodSchema = z.object({ where: SupplierWhereInputObjectSchema.optional() }).strict();