import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  token: z.string().optional()
}).strict();
export const UserSessionWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserSessionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSessionWhereUniqueInput>;
export const UserSessionWhereUniqueInputObjectZodSchema = makeSchema();
