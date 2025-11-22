import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BusinessDetailsSelectObjectSchema as BusinessDetailsSelectObjectSchema } from './objects/BusinessDetailsSelect.schema';
import { BusinessDetailsIncludeObjectSchema as BusinessDetailsIncludeObjectSchema } from './objects/BusinessDetailsInclude.schema';
import { BusinessDetailsWhereUniqueInputObjectSchema as BusinessDetailsWhereUniqueInputObjectSchema } from './objects/BusinessDetailsWhereUniqueInput.schema';
import { BusinessDetailsCreateInputObjectSchema as BusinessDetailsCreateInputObjectSchema } from './objects/BusinessDetailsCreateInput.schema';
import { BusinessDetailsUncheckedCreateInputObjectSchema as BusinessDetailsUncheckedCreateInputObjectSchema } from './objects/BusinessDetailsUncheckedCreateInput.schema';
import { BusinessDetailsUpdateInputObjectSchema as BusinessDetailsUpdateInputObjectSchema } from './objects/BusinessDetailsUpdateInput.schema';
import { BusinessDetailsUncheckedUpdateInputObjectSchema as BusinessDetailsUncheckedUpdateInputObjectSchema } from './objects/BusinessDetailsUncheckedUpdateInput.schema';

export const BusinessDetailsUpsertOneSchema: z.ZodType<Prisma.BusinessDetailsUpsertArgs> = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), where: BusinessDetailsWhereUniqueInputObjectSchema, create: z.union([ BusinessDetailsCreateInputObjectSchema, BusinessDetailsUncheckedCreateInputObjectSchema ]), update: z.union([ BusinessDetailsUpdateInputObjectSchema, BusinessDetailsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsUpsertArgs>;

export const BusinessDetailsUpsertOneZodSchema = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), where: BusinessDetailsWhereUniqueInputObjectSchema, create: z.union([ BusinessDetailsCreateInputObjectSchema, BusinessDetailsUncheckedCreateInputObjectSchema ]), update: z.union([ BusinessDetailsUpdateInputObjectSchema, BusinessDetailsUncheckedUpdateInputObjectSchema ]) }).strict();