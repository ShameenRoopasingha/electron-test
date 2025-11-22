import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BusinessDetailsSelectObjectSchema as BusinessDetailsSelectObjectSchema } from './objects/BusinessDetailsSelect.schema';
import { BusinessDetailsIncludeObjectSchema as BusinessDetailsIncludeObjectSchema } from './objects/BusinessDetailsInclude.schema';
import { BusinessDetailsWhereUniqueInputObjectSchema as BusinessDetailsWhereUniqueInputObjectSchema } from './objects/BusinessDetailsWhereUniqueInput.schema';

export const BusinessDetailsFindUniqueOrThrowSchema: z.ZodType<Prisma.BusinessDetailsFindUniqueOrThrowArgs> = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), where: BusinessDetailsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsFindUniqueOrThrowArgs>;

export const BusinessDetailsFindUniqueOrThrowZodSchema = z.object({ select: BusinessDetailsSelectObjectSchema.optional(), include: BusinessDetailsIncludeObjectSchema.optional(), where: BusinessDetailsWhereUniqueInputObjectSchema }).strict();