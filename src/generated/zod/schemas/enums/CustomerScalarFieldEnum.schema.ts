import * as z from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'phone', 'address', 'createdAt', 'updatedAt'])

export type CustomerScalarFieldEnum = z.infer<typeof CustomerScalarFieldEnumSchema>;