import { ZodType } from 'zod'

export function validate<T>(schema: ZodType<T>, data: unknown): T {
  try {
    return schema.parse(data)
  } catch (error: unknown) {
    if (error instanceof Error) {
      const zodError = error as { errors?: { message: string }[] }
      throw new Error(zodError.errors?.[0]?.message ?? 'Validation failed')
    }

    throw new Error('Validation failed')
  }
}
