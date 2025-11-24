import { getPrisma } from '../../../lib/utils'
import z from 'zod'
import bcrypt from 'bcrypt'
import { validate } from '../../../lib/validate'
import { UserInputSchema, UserResultSchema } from 'generated/zod/schemas'

const prisma = getPrisma()

// ✅ Base schemas (omit auto-managed and relational fields)
export const BaseUserInput = UserInputSchema.pick({
  username: true,
  email: true,
  password: true,
  role: true,
  fname: true,
  lname: true,
  phone: true,
  address: true,
  bank_account:true

})
export type BaseUserInputType = z.infer<typeof BaseUserInput>

export const BaseUserResult = UserResultSchema.omit({
  password: true,
  createdAt: true,
  updatedAt: true,
  sessions: true,
  expiredItems: true,
  bills: true,
  defects: true,
  business: true
})
export type BaseUserResultType = z.infer<typeof BaseUserResult>

// ✅ Create user with bcrypt hashing
export const createUser = async (data: BaseUserInputType): Promise<BaseUserResultType> => {
  const validatedData = validate(BaseUserInput, data)
  const hashedPassword = await bcrypt.hash(validatedData.password, 10)

  const user = await prisma.user.create({
    data: {
      ...validatedData,
      password: hashedPassword
    }
  })

  return BaseUserResult.parse(user)
}

// ✅ Get single user
export const getUserById = async (id: number): Promise<BaseUserResultType> => {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new Error('User not found')
  return BaseUserResult.parse(user)
}

// ✅ Get all users
export const getAllUser = async (): Promise<BaseUserResultType[]> => {
  const users = await prisma.user.findMany()
  return users.map((u) => BaseUserResult.parse(u))
}

// ✅ Update user (rehash password if provided)
export const updateUser = async (
  id: number,
  data: Partial<BaseUserInputType>
): Promise<BaseUserResultType> => {
  const validatedData = BaseUserInput.partial().parse(data)

  if (validatedData.password) {
    validatedData.password = await bcrypt.hash(validatedData.password, 10)
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: validatedData
  })

  return BaseUserResult.parse(updatedUser)
}

// ✅ Delete user
export const deleteUser = async (id: number): Promise<void> => {
  await prisma.user.delete({ where: { id } })
}
