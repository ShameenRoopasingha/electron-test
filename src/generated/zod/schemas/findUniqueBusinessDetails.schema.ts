import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BusinessDetailsSelectObjectSchema as BusinessDetailsSelectObjectSchema } from './objects/BusinessDetailsSelect.schema';
import { BusinessDetailsIncludeObjectSchema as BusinessDetailsIncludeObjectSchema } from './objects/BusinessDetailsInclude.schema';
import { BusinessDetailsWhereUniqueInputObjectSchema as BusinessDetailsWhereUniqueInputObjectSchema } from './objects/BusinessDetailsWhereUniqueInput.schema';

export const BusinessDetailsFindUniqueSchema: z.ZodType<Prisma.BusinessDetailsFindUniqueArgs> = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), where: BusinessDetailsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsFindUniqueArgs>;

export const BusinessDetailsFindUniqueZodSchema = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), where: BusinessDetailsWhereUniqueInputObjectSchema }).strict();