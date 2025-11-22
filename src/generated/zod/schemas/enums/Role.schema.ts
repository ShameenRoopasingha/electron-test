import * as z from 'zod';

export const RoleSchema = z.enum(['OWNER', 'ADMIN', 'CASHIER', 'SELLER'])

export type Role = z.infer<typeof RoleSchema>;