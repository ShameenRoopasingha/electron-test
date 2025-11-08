import * as z from 'zod';
// prettier-ignore
export const SupplierInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    company: z.string(),
    address: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    items: z.array(z.unknown()),
    restocks: z.array(z.unknown())
}).strict();

export type SupplierInputType = z.infer<typeof SupplierInputSchema>;
