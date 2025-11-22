import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.number().int(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    role: RoleSchema,
    fname: z.string(),
    lname: z.string(),
    phone: z.string(),
    address: z.string(),
    bank_account: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    bills: z.array(z.unknown()),
    sessions: z.array(z.unknown()),
    expiredItems: z.array(z.unknown()),
    restocks: z.array(z.unknown()),
    defects: z.array(z.unknown()),
    business: z.unknown().nullable()
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
