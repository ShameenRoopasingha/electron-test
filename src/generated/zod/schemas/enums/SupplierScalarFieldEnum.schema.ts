import * as z from 'zod';

export const SupplierScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'phone', 'company', 'address', 'createdAt', 'updatedAt'])

export type SupplierScalarFieldEnum = z.infer<typeof SupplierScalarFieldEnumSchema>;