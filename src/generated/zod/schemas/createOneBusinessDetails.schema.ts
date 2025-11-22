import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BusinessDetailsSelectObjectSchema as BusinessDetailsSelectObjectSchema } from './objects/BusinessDetailsSelect.schema';
import { BusinessDetailsIncludeObjectSchema as BusinessDetailsIncludeObjectSchema } from './objects/BusinessDetailsInclude.schema';
import { BusinessDetailsCreateInputObjectSchema as BusinessDetailsCreateInputObjectSchema } from './objects/BusinessDetailsCreateInput.schema';
import { BusinessDetailsUncheckedCreateInputObjectSchema as BusinessDetailsUncheckedCreateInputObjectSchema } from './objects/BusinessDetailsUncheckedCreateInput.schema';

export const BusinessDetailsCreateOneSchema: z.ZodType<Prisma.BusinessDetailsCreateArgs> = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), data: z.union([BusinessDetailsCreateInputObjectSchema, BusinessDetailsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsCreateArgs>;

export const BusinessDetailsCreateOneZodSchema = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), data: z.union([BusinessDetailsCreateInputObjectSchema, BusinessDetailsUncheckedCreateInputObjectSchema]) }).strict();