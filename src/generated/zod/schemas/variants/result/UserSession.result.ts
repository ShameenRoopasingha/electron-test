import * as z from 'zod';
// prettier-ignore
export const UserSessionResultSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    token: z.string(),
    ipAddress: z.string().nullable(),
    deviceInfo: z.string().nullable(),
    loginTime: z.date(),
    logoutTime: z.date().nullable(),
    isActive: z.boolean(),
    user: z.unknown()
}).strict();

export type UserSessionResultType = z.infer<typeof UserSessionResultSchema>;
