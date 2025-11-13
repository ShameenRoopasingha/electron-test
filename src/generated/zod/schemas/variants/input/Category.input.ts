import * as z from 'zod';
// prettier-ignore
export const CategoryInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().optional().nullable(),
    items: z.array(z.unknown())
}).strict();

export type CategoryInputType = z.infer<typeof CategoryInputSchema>;
