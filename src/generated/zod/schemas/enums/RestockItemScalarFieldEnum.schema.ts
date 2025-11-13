import * as z from 'zod';

export const RestockItemScalarFieldEnumSchema = z.enum(['id', 'restockId', 'itemId', 'quantity', 'costPrice'])

export type RestockItemScalarFieldEnum = z.infer<typeof RestockItemScalarFieldEnumSchema>;