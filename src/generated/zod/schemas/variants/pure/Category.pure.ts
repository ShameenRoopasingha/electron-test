import * as z from 'zod';
// prettier-ignore
export const CategoryModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    items: z.array(z.unknown())
}).strict();

export type CategoryPureType = z.infer<typeof CategoryModelSchema>;
