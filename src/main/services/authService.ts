import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getPrisma } from '../../../lib/utils'
import { UserInputSchema } from '../../generated/zod/schemas'
import { BaseUserResult } from './userService'
import { z } from 'zod'

const prisma = getPrisma()
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production'

// Warn if JWT_SECRET is not set
if (!process.env.JWT_SECRET) {
  console.warn('WARNING: JWT_SECRET is not set in environment variables. Using fallback secret.')
}

// ✅ Use pick() to create LoginSchema from existing UserInputSchema
export const LoginSchema = UserInputSchema.pick({
  username: true,
  password: true
})
export type LoginInput = z.infer<typeof LoginSchema>

// ✅ Owner registration schema with required fields
export const OwnerRegisterSchema = UserInputSchema.pick({
  username: true,
  password: true,
  email: true,
  fname: true,
  lname: true,
  phone: true,
  address: true,
  bank_account: true
})
export type OwnerRegisterInput = z.infer<typeof OwnerRegisterSchema>

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

// ✅ Owner registration function
export const registerOwner = async (input: OwnerRegisterInput): Promise<LoginResult> => {
  const validatedData = OwnerRegisterSchema.parse(input)

  // Check if an owner already exists
  const existingOwner = await prisma.user.findFirst({ where: { role: 'OWNER' } })
  if (existingOwner) {
    throw new Error('An owner account already exists')
  }

  // Check if username or email already exists
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ username: validatedData.username }, { email: validatedData.email }]
    }
  })
  if (existingUser) {
    throw new Error('Username or email already exists')
  }

  // Hash password and create user
  const hashedPassword = await bcrypt.hash(validatedData.password, 10)
  const user = await prisma.user.create({
    data: {
      ...validatedData,
      password: hashedPassword,
      role: 'OWNER'
    }
  })

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
