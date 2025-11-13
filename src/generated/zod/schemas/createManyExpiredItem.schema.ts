import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ExpiredItemCreateManyInputObjectSchema as ExpiredItemCreateManyInputObjectSchema } from './objects/ExpiredItemCreateManyInput.schema';

export const ExpiredItemCreateManySchema: z.ZodType<Prisma.ExpiredItemCreateManyArgs> = z.object({ data: z.union([ ExpiredItemCreateManyInputObjectSchema, z.array(ExpiredItemCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ExpiredItemCreateManyArgs>;

export const ExpiredItemCreateManyZodSchema = z.object({ data: z.union([ ExpiredItemCreateManyInputObjectSchema, z.array(ExpiredItemCreateManyInputObjectSchema) ]),  }).strict();