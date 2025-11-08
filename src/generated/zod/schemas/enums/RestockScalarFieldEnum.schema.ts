import * as z from 'zod';

export const RestockScalarFieldEnumSchema = z.enum(['id', 'supplierId', 'userId', 'totalCost', 'createdAt'])

export type RestockScalarFieldEnum = z.infer<typeof RestockScalarFieldEnumSchema>;