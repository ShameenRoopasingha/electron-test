import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SupplierSelectObjectSchema as SupplierSelectObjectSchema } from './objects/SupplierSelect.schema';
import { SupplierIncludeObjectSchema as SupplierIncludeObjectSchema } from './objects/SupplierInclude.schema';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';
import { SupplierCreateInputObjectSchema as SupplierCreateInputObjectSchema } from './objects/SupplierCreateInput.schema';
import { SupplierUncheckedCreateInputObjectSchema as SupplierUncheckedCreateInputObjectSchema } from './objects/SupplierUncheckedCreateInput.schema';
import { SupplierUpdateInputObjectSchema as SupplierUpdateInputObjectSchema } from './objects/SupplierUpdateInput.schema';
import { SupplierUncheckedUpdateInputObjectSchema as SupplierUncheckedUpdateInputObjectSchema } from './objects/SupplierUncheckedUpdateInput.schema';

export const SupplierUpsertOneSchema: z.ZodType<Prisma.SupplierUpsertArgs> = z.object({ select: SupplierSelectObjectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), where: SupplierWhereUniqueInputObjectSchema, create: z.union([ SupplierCreateInputObjectSchema, SupplierUncheckedCreateInputObjectSchema ]), update: z.union([ SupplierUpdateInputObjectSchema, SupplierUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SupplierUpsertArgs>;

export const SupplierUpsertOneZodSchema = z.object({ select: SupplierSelectObjectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), where: SupplierWhereUniqueInputObjectSchema, create: z.union([ SupplierCreateInputObjectSchema, SupplierUncheckedCreateInputObjectSchema ]), update: z.union([ SupplierUpdateInputObjectSchema, SupplierUncheckedUpdateInputObjectSchema ]) }).strict();