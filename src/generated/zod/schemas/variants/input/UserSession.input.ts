import * as z from 'zod';
// prettier-ignore
export const UserSessionInputSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    token: z.string(),
    ipAddress: z.string().optional().nullable(),
    deviceInfo: z.string().optional().nullable(),
    loginTime: z.date(),
    logoutTime: z.date().optional().nullable(),
    isActive: z.boolean(),
    user: z.unknown()
}).strict();

export type UserSessionInputType = z.infer<typeof UserSessionInputSchema>;
