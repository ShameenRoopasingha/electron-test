import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'username', 'email', 'passwordHash', 'role', 'fname', 'lname', 'phone', 'address', 'bank_account', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;