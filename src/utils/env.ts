import { config } from 'dotenv'
import * as yup from 'yup'

config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

const schema = yup.object({
  port: yup.number().required(),
  databaseUrl: yup.string().required(),
  saltRounds: yup.number().required(),
  nodeEnv: yup.string().required(),
})

const env = schema.validateSync({
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
  saltRounds: process.env.SALT_ROUNDS,
  nodeEnv: process.env.NODE_ENV || 'development',
})

export default env
