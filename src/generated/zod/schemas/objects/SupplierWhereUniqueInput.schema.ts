import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string().optional(),
  phone: z.string().optional()
}).strict();
export const SupplierWhereUniqueInputObjectSchema: z.ZodType<Prisma.SupplierWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SupplierWhereUniqueInput>;
export const SupplierWhereUniqueInputObjectZodSchema = makeSchema();
