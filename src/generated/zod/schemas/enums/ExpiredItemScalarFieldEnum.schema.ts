import * as z from 'zod';

export const ExpiredItemScalarFieldEnumSchema = z.enum(['id', 'itemId', 'quantity', 'expirationDate', 'disposedBy', 'reason', 'createdAt'])

export type ExpiredItemScalarFieldEnum = z.infer<typeof ExpiredItemScalarFieldEnumSchema>;