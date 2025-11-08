import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockCreateManyInputObjectSchema as RestockCreateManyInputObjectSchema } from './objects/RestockCreateManyInput.schema';

export const RestockCreateManySchema: z.ZodType<Prisma.RestockCreateManyArgs> = z.object({ data: z.union([ RestockCreateManyInputObjectSchema, z.array(RestockCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.RestockCreateManyArgs>;

export const RestockCreateManyZodSchema = z.object({ data: z.union([ RestockCreateManyInputObjectSchema, z.array(RestockCreateManyInputObjectSchema) ]),  }).strict();