import * as z from 'zod';

export const CheckoutScalarFieldEnumSchema = z.enum(['id', 'billId', 'itemId', 'quantity', 'price', 'payedAmount', 'createdAt', 'updatedAt'])

export type CheckoutScalarFieldEnum = z.infer<typeof CheckoutScalarFieldEnumSchema>;