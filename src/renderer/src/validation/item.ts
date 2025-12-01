import { z } from 'zod'
import { ItemCreateInputObjectSchema } from '../../../generated/zod/schemas/objects/ItemCreateInput.schema'

export type BaseItemResult = z.infer<typeof ItemCreateInputObjectSchema>

export type BaseItemResultType = 'success' | 'error'
