import prisma from '@/prisma'
import hashPassword from '@/utils/hashPassword'
import { Prisma, User } from '@prisma/client'

const defaultSelect = {
  id: true,
  createdAt: true,
  username: true,
  email: true,
  password: false,
}

const create = async (data: Prisma.UserCreateArgs['data']) => {
  const user = await prisma.user.create({
    data: {
      ...data,
      password: await hashPassword(data.password),
    },
    select: defaultSelect,
  })

  return user
}

const findAll = async () => {
  const allUsers = await prisma.user.findMany({
    select: defaultSelect,
  })

  return allUsers
}

const findByIdOrUsername = async (target: string) => {
  const user = await prisma.user.findFirst({
    where: { OR: [{ id: target }, { username: target }] },
    select: defaultSelect,
  })

  return user
}

const updateByIdOrUsername = async (target: string, data: Partial<User>) => {
  const { id } = (await findByIdOrUsername(target)) || { id: null }

  if (!id) return null

  const user = await prisma.user.update({
    where: { id },
    data: {
      ...data,
      password: !!data.password ? await hashPassword(data.password) : undefined,
    },
    select: defaultSelect,
  })

  return user
}

export default { create, findAll, findByIdOrUsername, updateByIdOrUsername }
