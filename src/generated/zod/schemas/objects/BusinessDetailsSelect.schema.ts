import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  registrationNumber: z.boolean().optional(),
  address: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  logoUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const BusinessDetailsSelectObjectSchema: z.ZodType<Prisma.BusinessDetailsSelect> = makeSchema() as unknown as z.ZodType<Prisma.BusinessDetailsSelect>;
export const BusinessDetailsSelectObjectZodSchema = makeSchema();
