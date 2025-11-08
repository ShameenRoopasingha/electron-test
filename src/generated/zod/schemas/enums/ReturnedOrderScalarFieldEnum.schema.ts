import * as z from 'zod';

export const ReturnedOrderScalarFieldEnumSchema = z.enum(['id', 'billId', 'itemId', 'quantity', 'reason', 'createdAt'])

export type ReturnedOrderScalarFieldEnum = z.infer<typeof ReturnedOrderScalarFieldEnumSchema>;