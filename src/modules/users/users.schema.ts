import * as yup from 'yup'

const usernameSchema = yup
  .string()
  .matches(/^[a-zA-Z0-9_.]+$/, 'Invalid username')
  .min(4)
  .max(16)
const emailSchema = yup.string().email().max(320)
const passwordSchema = yup.string().min(8).max(128)

const create = {
  bodySchema: yup.object({
    username: usernameSchema.required(),
    email: emailSchema.required(),
    password: passwordSchema.required(),
  }),
}

const show = {
  paramsSchema: yup.object({
    target: yup.string().required(),
  }),
}

const update = {
  paramsSchema: yup.object({
    target: yup.string().required(),
  }),
  bodySchema: yup.object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
  }),
}

export default { create, show, update }
