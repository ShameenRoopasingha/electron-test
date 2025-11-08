import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SupplierUpdateManyMutationInputObjectSchema as SupplierUpdateManyMutationInputObjectSchema } from './objects/SupplierUpdateManyMutationInput.schema';
import { SupplierWhereInputObjectSchema as SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';

export const SupplierUpdateManySchema: z.ZodType<Prisma.SupplierUpdateManyArgs> = z.object({ data: SupplierUpdateManyMutationInputObjectSchema, where: SupplierWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SupplierUpdateManyArgs>;

export const SupplierUpdateManyZodSchema = z.object({ data: SupplierUpdateManyMutationInputObjectSchema, where: SupplierWhereInputObjectSchema.optional() }).strict();