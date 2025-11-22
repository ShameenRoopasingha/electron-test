import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutBusinessInputObjectSchema as UserCreateNestedOneWithoutBusinessInputObjectSchema } from './UserCreateNestedOneWithoutBusinessInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  registrationNumber: z.string().optional().nullable(),
  address: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutBusinessInputObjectSchema)
}).strict();
export const BusinessDetailsCreateInputObjectSchema: z.ZodType<Prisma.BusinessDetailsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsCreateInput>;
export const BusinessDetailsCreateInputObjectZodSchema = makeSchema();
