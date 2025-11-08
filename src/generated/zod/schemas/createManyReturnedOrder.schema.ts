import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ReturnedOrderCreateManyInputObjectSchema as ReturnedOrderCreateManyInputObjectSchema } from './objects/ReturnedOrderCreateManyInput.schema';

export const ReturnedOrderCreateManySchema: z.ZodType<Prisma.ReturnedOrderCreateManyArgs> = z.object({ data: z.union([ ReturnedOrderCreateManyInputObjectSchema, z.array(ReturnedOrderCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ReturnedOrderCreateManyArgs>;

export const ReturnedOrderCreateManyZodSchema = z.object({ data: z.union([ ReturnedOrderCreateManyInputObjectSchema, z.array(ReturnedOrderCreateManyInputObjectSchema) ]),  }).strict();