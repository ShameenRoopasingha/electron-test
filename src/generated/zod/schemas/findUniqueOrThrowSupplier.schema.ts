import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SupplierSelectObjectSchema as SupplierSelectObjectSchema } from './objects/SupplierSelect.schema';
import { SupplierIncludeObjectSchema as SupplierIncludeObjectSchema } from './objects/SupplierInclude.schema';
import { SupplierWhereUniqueInputObjectSchema as SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';

export const SupplierFindUniqueOrThrowSchema: z.ZodType<Prisma.SupplierFindUniqueOrThrowArgs> = z.object({ select: SupplierSelectObjectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), where: SupplierWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SupplierFindUniqueOrThrowArgs>;

export const SupplierFindUniqueOrThrowZodSchema = z.object({ select: SupplierSelectObjectSchema.optional(), include: SupplierIncludeObjectSchema.optional(), where: SupplierWhereUniqueInputObjectSchema }).strict();