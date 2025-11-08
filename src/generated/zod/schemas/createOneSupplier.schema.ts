import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SupplierSelectObjectSchema as SupplierSelectObjectSchema } from './objects/SupplierSelect.schema';
import { SupplierIncludeObjectSchema as SupplierIncludeObjectSchema } from './objects/SupplierInclude.schema';
import { SupplierCreateInputObjectSchema as SupplierCreateInputObjectSchema } from './objects/SupplierCreateInput.schema';
import { SupplierUncheckedCreateInputObjectSchema as SupplierUncheckedCreateInputObjectSchema } from './objects/SupplierUncheckedCreateInput.schema';

export const SupplierCreateOneSchema: z.ZodType<Prisma.SupplierCreateArgs> = z.object({ select: SupplierSelectObjectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), data: z.union([SupplierCreateInputObjectSchema, SupplierUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SupplierCreateArgs>;

export const SupplierCreateOneZodSchema = z.object({ select: SupplierSelectObjectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), data: z.union([SupplierCreateInputObjectSchema, SupplierUncheckedCreateInputObjectSchema]) }).strict();