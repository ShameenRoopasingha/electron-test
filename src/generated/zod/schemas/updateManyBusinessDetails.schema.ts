import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BusinessDetailsUpdateManyMutationInputObjectSchema as BusinessDetailsUpdateManyMutationInputObjectSchema } from './objects/BusinessDetailsUpdateManyMutationInput.schema';
import { BusinessDetailsWhereInputObjectSchema as BusinessDetailsWhereInputObjectSchema } from './objects/BusinessDetailsWhereInput.schema';

export const BusinessDetailsUpdateManySchema: z.ZodType<Prisma.BusinessDetailsUpdateManyArgs> = z.object({ data: BusinessDetailsUpdateManyMutationInputObjectSchema, where: BusinessDetailsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsUpdateManyArgs>;

export const BusinessDetailsUpdateManyZodSchema = z.object({ data: BusinessDetailsUpdateManyMutationInputObjectSchema, where: BusinessDetailsWhereInputObjectSchema.optional() }).strict();