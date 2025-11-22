import * as z from 'zod';
// prettier-ignore
export const DefectModelSchema = z.object({
    id: z.number().int(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int(),
    reason: z.string(),
    reportedBy: z.number().int(),
    createdAt: z.date(),
    item: z.unknown().nullable(),
    user: z.unknown()
}).strict();

export type DefectPureType = z.infer<typeof DefectModelSchema>;
