import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { SupplierCreateManyInputObjectSchema as SupplierCreateManyInputObjectSchema } from './objects/SupplierCreateManyInput.schema';

export const SupplierCreateManySchema: z.ZodType<Prisma.SupplierCreateManyArgs> = z.object({ data: z.union([ SupplierCreateManyInputObjectSchema, z.array(SupplierCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.SupplierCreateManyArgs>;

export const SupplierCreateManyZodSchema = z.object({ data: z.union([ SupplierCreateManyInputObjectSchema, z.array(SupplierCreateManyInputObjectSchema) ]),  }).strict();