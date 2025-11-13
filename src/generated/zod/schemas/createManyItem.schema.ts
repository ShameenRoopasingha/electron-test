import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ItemCreateManyInputObjectSchema as ItemCreateManyInputObjectSchema } from './objects/ItemCreateManyInput.schema';

export const ItemCreateManySchema: z.ZodType<Prisma.ItemCreateManyArgs> = z.object({ data: z.union([ ItemCreateManyInputObjectSchema, z.array(ItemCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ItemCreateManyArgs>;

export const ItemCreateManyZodSchema = z.object({ data: z.union([ ItemCreateManyInputObjectSchema, z.array(ItemCreateManyInputObjectSchema) ]),  }).strict();