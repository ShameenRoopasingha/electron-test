import * as z from 'zod';
// prettier-ignore
export const CategoryResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    items: z.array(z.unknown())
}).strict();

export type CategoryResultType = z.infer<typeof CategoryResultSchema>;
