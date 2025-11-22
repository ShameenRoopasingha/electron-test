import * as z from 'zod';
// prettier-ignore
export const DefectInputSchema = z.object({
    id: z.number().int(),
    itemId: z.number().int().optional().nullable(),
    quantity: z.number().int(),
    reason: z.string(),
    reportedBy: z.number().int(),
    createdAt: z.date(),
    item: z.unknown().optional().nullable(),
    user: z.unknown()
}).strict();

export type DefectInputType = z.infer<typeof DefectInputSchema>;
