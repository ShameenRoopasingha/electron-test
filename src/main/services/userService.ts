import { PrismaClient } from 'generated/prisma/client'
import { UserInputSchema, UserResultSchema } from 'generated/zod/schemas'
import z from 'zod'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key'

export const BaseUserInput = UserInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  bills: true,
  sessions: true,
  expiredItems: true
})
export type BaseUserInputType = z.infer<typeof BaseUserInput>

export const BaseUserResult = UserResultSchema.omit({
  password: true,
  createdAt: true,
  updatedAt: true,
  sessions: true,
  expiredItems: true,
  bills: true
})
export type BaseUserResultType = z.infer<typeof BaseUserResult>

export const createUser = async (data: BaseUserInputType): Promise<BaseUserResultType> => {
  const validatedData = BaseUserInput.parse(data)
  const hashedPassword = await bcrypt.hash(validatedData.password, 10)
  const user = await prisma.user.create({
    data: {
      username: validatedData.username,
      email: validatedData.email,
      password: hashedPassword,
      fname: validatedData.fname,
      lname: validatedData.lname,
      role: validatedData.role,
      phone: validatedData.phone,
      address: validatedData.address,
      bank_account: validatedData.bank_account
    }
  })
  return BaseUserResult.parse(user)
}

export const getUserById = async (id: number): Promise<BaseUserResultType> => {
  const userById = await prisma.user.findUnique({
    where: { id }
  })
  if (!userById) {
    throw new Error('User not found')
  }
  return BaseUserResult.parse(userById)
}

export const getAllUser = async (): Promise<BaseUserResultType[]> => {
  const user = await prisma.user.findMany()
  return user.map((user) => BaseUserResult.parse(user))
}

export const updateUser = async (
  id: number,
  data: Partial<BaseUserInputType>
): Promise<BaseUserResultType> => {
  const validatedData = BaseUserInput.partial().parse(data)
  if (validatedData.passwordHash) {
    validatedData.passwordHash = await bcrypt.hash(validatedData.passwordHash, 10)
  }
  const updatedUser = await prisma.user.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseUserResult.parse(updatedUser)
}

export const deleteUser = async (id: number): Promise<void> => {
  await prisma.user.delete({
    where: { id }
  })
}
