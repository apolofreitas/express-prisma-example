import { PrismaClient } from '@prisma/client'
import env from './utils/env'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.databaseUrl,
    },
  },
})

export default prisma
