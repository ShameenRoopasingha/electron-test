import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BusinessDetailsSelectObjectSchema as BusinessDetailsSelectObjectSchema } from './objects/BusinessDetailsSelect.schema';
import { BusinessDetailsIncludeObjectSchema as BusinessDetailsIncludeObjectSchema } from './objects/BusinessDetailsInclude.schema';
import { BusinessDetailsUpdateInputObjectSchema as BusinessDetailsUpdateInputObjectSchema } from './objects/BusinessDetailsUpdateInput.schema';
import { BusinessDetailsUncheckedUpdateInputObjectSchema as BusinessDetailsUncheckedUpdateInputObjectSchema } from './objects/BusinessDetailsUncheckedUpdateInput.schema';
import { BusinessDetailsWhereUniqueInputObjectSchema as BusinessDetailsWhereUniqueInputObjectSchema } from './objects/BusinessDetailsWhereUniqueInput.schema';

export const BusinessDetailsUpdateOneSchema: z.ZodType<Prisma.BusinessDetailsUpdateArgs> = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), data: z.union([BusinessDetailsUpdateInputObjectSchema, BusinessDetailsUncheckedUpdateInputObjectSchema]), where: BusinessDetailsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsUpdateArgs>;

export const BusinessDetailsUpdateOneZodSchema = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), data: z.union([BusinessDetailsUpdateInputObjectSchema, BusinessDetailsUncheckedUpdateInputObjectSchema]), where: BusinessDetailsWhereUniqueInputObjectSchema }).strict();