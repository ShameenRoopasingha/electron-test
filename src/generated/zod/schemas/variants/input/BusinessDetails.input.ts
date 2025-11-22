import * as z from 'zod';
// prettier-ignore
export const BusinessDetailsInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    registrationNumber: z.string().optional().nullable(),
    address: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    logoUrl: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ownerId: z.number().int(),
    owner: z.unknown()
}).strict();

export type BusinessDetailsInputType = z.infer<typeof BusinessDetailsInputSchema>;
