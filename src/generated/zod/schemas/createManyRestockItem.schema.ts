import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RestockItemCreateManyInputObjectSchema as RestockItemCreateManyInputObjectSchema } from './objects/RestockItemCreateManyInput.schema';

export const RestockItemCreateManySchema: z.ZodType<Prisma.RestockItemCreateManyArgs> = z.object({ data: z.union([ RestockItemCreateManyInputObjectSchema, z.array(RestockItemCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.RestockItemCreateManyArgs>;

export const RestockItemCreateManyZodSchema = z.object({ data: z.union([ RestockItemCreateManyInputObjectSchema, z.array(RestockItemCreateManyInputObjectSchema) ]),  }).strict();