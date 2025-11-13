import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { BillCreateManyInputObjectSchema as BillCreateManyInputObjectSchema } from './objects/BillCreateManyInput.schema';

export const BillCreateManySchema: z.ZodType<Prisma.BillCreateManyArgs> = z.object({ data: z.union([ BillCreateManyInputObjectSchema, z.array(BillCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.BillCreateManyArgs>;

export const BillCreateManyZodSchema = z.object({ data: z.union([ BillCreateManyInputObjectSchema, z.array(BillCreateManyInputObjectSchema) ]),  }).strict();