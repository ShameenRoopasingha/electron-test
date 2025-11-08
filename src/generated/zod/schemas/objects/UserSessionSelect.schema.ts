import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  token: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  deviceInfo: z.boolean().optional(),
  loginTime: z.boolean().optional(),
  logoutTime: z.boolean().optional(),
  isActive: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const UserSessionSelectObjectSchema: z.ZodType<Prisma.UserSessionSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionSelect>;
export const UserSessionSelectObjectZodSchema = makeSchema();
