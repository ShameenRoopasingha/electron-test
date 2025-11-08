import * as z from 'zod';

export const DefectScalarFieldEnumSchema = z.enum(['id', 'itemId', 'quantity', 'reason', 'reportedBy', 'createdAt'])

export type DefectScalarFieldEnum = z.infer<typeof DefectScalarFieldEnumSchema>;