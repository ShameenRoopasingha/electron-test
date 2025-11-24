import * as z from 'zod'
// prettier-ignore
export const BusinessDetailsResultSchema = z.object({
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

export type BusinessDetailsResultType = z.infer<typeof BusinessDetailsResultSchema>
