import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BusinessDetailsCreateManyInputObjectSchema as BusinessDetailsCreateManyInputObjectSchema } from './objects/BusinessDetailsCreateManyInput.schema';

export const BusinessDetailsCreateManySchema: z.ZodType<Prisma.BusinessDetailsCreateManyArgs> = z.object({ data: z.union([ BusinessDetailsCreateManyInputObjectSchema, z.array(BusinessDetailsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.BusinessDetailsCreateManyArgs>;

export const BusinessDetailsCreateManyZodSchema = z.object({ data: z.union([ BusinessDetailsCreateManyInputObjectSchema, z.array(BusinessDetailsCreateManyInputObjectSchema) ]),  }).strict();