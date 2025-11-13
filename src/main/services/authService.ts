import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { PrismaClient } from 'generated/prisma/client'
import { BaseUserResult } from './userService'
import { UserInputSchema } from 'generated/zod/schemas'
import z from 'zod'

export const LoginSchema = UserInputSchema.pick({
  username: true,
  password: true // rename later as 'password' logically
})
export type LoginInput = z.infer<typeof LoginSchema>

export interface LoginResult {
  token: string
  user: z.infer<typeof BaseUserResult>
}

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key'

export const loginUser = async (input: LoginInput): Promise<LoginResult> => {
  const { username, password } = LoginSchema.parse(input)
  const user = await prisma.user.findUnique({ where: { username } })
  if (!user) throw new Error('User not found')

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error('Invalid credentials')

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' })
  return { token, user: BaseUserResult.parse(user) }
}

export const verifyToken = (token: string): string | jwt.JwtPayload => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch {
    throw new Error('Invalid token')
  }
}
