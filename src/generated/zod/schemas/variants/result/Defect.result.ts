import * as z from 'zod';
// prettier-ignore
export const DefectResultSchema = z.object({
    id: z.number().int(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int(),
    reason: z.string(),
    reportedBy: z.number().int(),
    createdAt: z.date(),
    item: z.unknown().nullable()
}).strict();

export type DefectResultType = z.infer<typeof DefectResultSchema>;
