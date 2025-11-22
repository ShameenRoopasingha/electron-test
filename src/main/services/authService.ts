import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getPrisma } from '../../../lib/utils'
import { UserInputSchema } from ''
import { BaseUserResult } from './userService'
import { z } from 'zod'

const prisma = getPrisma()
const JWT_SECRET = process.env.JWT_SECRET ?? ''

// ✅ Use pick() to create LoginSchema from existing UserInputSchema
export const LoginSchema = UserInputSchema.pick({
  username: true,
  password: true
})
export type LoginInput = z.infer<typeof LoginSchema>


export const OwnerRegister = UserInputSchema.pick({
  username: true,
  password: true,
  email: true,

})

export interface LoginResult {
  token: string
  user: z.infer<typeof BaseUserResult>
}

// ✅ Login function with Zod validation + return typing
export const loginUser = async (input: LoginInput): Promise<LoginResult> => {
  const { username, password } = LoginSchema.parse(input)

  const user = await prisma.user.findUnique({ where: { username } })
  if (!user) throw new Error('User not found')

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error('Invalid credentials')

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' })
  return { token, user: BaseUserResult.parse(user) }
}

// ✅ Strongly typed token verification
export interface TokenPayload {
  id: number
  role: string
  iat?: number
  exp?: number
}

export const verifyToken = (token: string): TokenPayload => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload
  } catch {
    throw new Error('Invalid token')
  }
}
