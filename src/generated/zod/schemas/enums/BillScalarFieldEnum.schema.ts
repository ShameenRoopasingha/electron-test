import * as z from 'zod';

export const BillScalarFieldEnumSchema = z.enum(['id', 'userId', 'customerId', 'totalAmount', 'paymentMethod', 'paymentStatus', 'createdAt', 'updatedAt'])

export type BillScalarFieldEnum = z.infer<typeof BillScalarFieldEnumSchema>;