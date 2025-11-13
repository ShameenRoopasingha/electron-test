import * as z from 'zod';

export const UserSessionScalarFieldEnumSchema = z.enum(['id', 'userId', 'token', 'ipAddress', 'deviceInfo', 'loginTime', 'logoutTime', 'isActive'])

export type UserSessionScalarFieldEnum = z.infer<typeof UserSessionScalarFieldEnumSchema>;