import { validate } from '../../../lib/validate'
import { getPrisma } from '../../../lib/utils'
import { UserSessionInputSchema, UserSessionResultSchema } from '../../generated/zod/schemas' // Adjusted path
import { z } from 'zod'

const prisma = getPrisma()
export const BaseUserSessionInput = UserSessionInputSchema.omit({
  id: true,
  loginTime: true,
  logoutTime: true,
  user: true
})
export type BaseUserSessionInputType = z.infer<typeof BaseUserSessionInput>
export const BaseUserSessionResult = UserSessionResultSchema.omit({
  user: true
})
export type BaseUserSessionResultType = z.infer<typeof BaseUserSessionResult>
export const createUserSession = async (
  data: BaseUserSessionInputType
): Promise<BaseUserSessionResultType> => {
  const validatedData = validate(BaseUserSessionInput, data)
  const userSession = await prisma.userSession.create({
    data: {
      userId: validatedData.userId,
      token: validatedData.token,
      ipAddress: validatedData.ipAddress,
      deviceInfo: validatedData.deviceInfo,
      isActive: validatedData.isActive
    }
  })
  return BaseUserSessionResult.parse(userSession)
}
export const getUserSessionById = async (id: number): Promise<BaseUserSessionResultType> => {
  const userSessionById = await prisma.userSession.findUnique({
    where: { id }
  })
  if (!userSessionById) {
    throw new Error('UserSession not found')
  }
  return BaseUserSessionResult.parse(userSessionById)
}
export const getAllUserSessions = async (): Promise<BaseUserSessionResultType[]> => {
  const userSessions = await prisma.userSession.findMany()
  return userSessions.map((userSession) => BaseUserSessionResult.parse(userSession))
}
export const updateUserSession = async (
  id: number,
  data: Partial<BaseUserSessionInputType>
): Promise<BaseUserSessionResultType> => {
  const validatedData = BaseUserSessionInput.partial().parse(data)
  const updatedUserSession = await prisma.userSession.update({
    where: { id },
    data: { ...validatedData }
  })
  return BaseUserSessionResult.parse(updatedUserSession)
}
export const deleteUserSession = async (id: number): Promise<void> => {
  await prisma.userSession.delete({
    where: { id }
  })
}
