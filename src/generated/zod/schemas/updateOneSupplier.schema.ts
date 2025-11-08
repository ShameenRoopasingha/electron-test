import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SupplierSelectObjectSchema as SupplierSelectObjectSchema } from './objects/SupplierSelect.schema';
import { SupplierIncludeObjectSchema as SupplierIncludeObjectSchema } from './objects/SupplierInclude.schema';
import { SupplierUpdateInputObjectSchema as SupplierUpdateInputObjectSchema } from './objects/SupplierUpdateInput.schema';
import { SupplierUncheckedUpdateInputObjectSchema as SupplierUncheckedUpdateInputObjectSchema } from './objects/SupplierUncheckedUpdateInput.schema';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';

export const SupplierUpdateOneSchema: z.ZodType<Prisma.SupplierUpdateArgs> = z.object({ select: SupplierSelectObjectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), data: z.union([SupplierUpdateInputObjectSchema, SupplierUncheckedUpdateInputObjectSchema]), where: SupplierWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SupplierUpdateArgs>;

export const SupplierUpdateOneZodSchema = z.object({ select: SupplierSelectObjectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), data: z.union([SupplierUpdateInputObjectSchema, SupplierUncheckedUpdateInputObjectSchema]), where: SupplierWhereUniqueInputObjectSchema }).strict();