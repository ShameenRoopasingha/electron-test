import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutSessionsInputObjectSchema as UserCreateNestedOneWithoutSessionsInputObjectSchema } from './UserCreateNestedOneWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  token: z.string(),
  ipAddress: z.string().optional().nullable(),
  deviceInfo: z.string().optional().nullable(),
  loginTime: z.coerce.date().optional(),
  logoutTime: z.coerce.date().optional().nullable(),
  isActive: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema)
}).strict();
export const UserSessionCreateInputObjectSchema: z.ZodType<Prisma.UserSessionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionCreateInput>;
export const UserSessionCreateInputObjectZodSchema = makeSchema();
