import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { DefectCreateManyInputObjectSchema as DefectCreateManyInputObjectSchema } from './objects/DefectCreateManyInput.schema';

export const DefectCreateManySchema: z.ZodType<Prisma.DefectCreateManyArgs> = z.object({ data: z.union([ DefectCreateManyInputObjectSchema, z.array(DefectCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.DefectCreateManyArgs>;

export const DefectCreateManyZodSchema = z.object({ data: z.union([ DefectCreateManyInputObjectSchema, z.array(DefectCreateManyInputObjectSchema) ]),  }).strict();