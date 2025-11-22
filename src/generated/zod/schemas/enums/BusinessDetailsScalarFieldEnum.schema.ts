import * as z from 'zod';

export const BusinessDetailsScalarFieldEnumSchema = z.enum(['id', 'name', 'registrationNumber', 'address', 'email', 'phone', 'logoUrl', 'createdAt', 'updatedAt', 'ownerId'])

export type BusinessDetailsScalarFieldEnum = z.infer<typeof BusinessDetailsScalarFieldEnumSchema>;