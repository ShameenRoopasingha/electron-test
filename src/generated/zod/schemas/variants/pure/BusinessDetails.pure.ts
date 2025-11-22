import * as z from 'zod';
// prettier-ignore
export const BusinessDetailsModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    registrationNumber: z.string().nullable(),
    address: z.string(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    logoUrl: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ownerId: z.number().int(),
    owner: z.unknown()
}).strict();

export type BusinessDetailsPureType = z.infer<typeof BusinessDetailsModelSchema>;
