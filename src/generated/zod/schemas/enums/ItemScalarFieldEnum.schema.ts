import * as z from 'zod';

export const ItemScalarFieldEnumSchema = z.enum(['id', 'name', 'categoryId', 'supplierId', 'barcode', 'costPrice', 'sellingPrice', 'quantityInStock', 'reorder_level', 'createdAt', 'updatedAt'])

export type ItemScalarFieldEnum = z.infer<typeof ItemScalarFieldEnumSchema>;