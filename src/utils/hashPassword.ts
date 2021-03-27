import bcrypt from 'bcrypt'
import env from './env'

export default async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(env.saltRounds)
  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword
}
