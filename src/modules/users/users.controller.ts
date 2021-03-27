import { RequestHandler } from 'express'
import usersSchema from './users.schema'
import usersService from './users.service'

const index: RequestHandler = async (_req, res) => {
  const users = await usersService.findAll()

  res.json(users)
}

const create: RequestHandler = async (req, res) => {
  try {
    const options = await usersSchema.create.bodySchema.validate(req.body)
    const user = await usersService.create(options)

    res.json(user)
  } catch {
    res.sendStatus(400)
  }
}

const show: RequestHandler = async (req, res) => {
  try {
    const { target } = await usersSchema.show.paramsSchema.validate(req.params)
    const user = await usersService.findByIdOrUsername(target)

    if (!user) res.sendStatus(404)

    res.json(user)
  } catch {
    res.sendStatus(400)
  }
}

const update: RequestHandler = async (req, res) => {
  try {
    const { target } = await usersSchema.update.paramsSchema.validate(
      req.params
    )
    const options = await usersSchema.update.bodySchema.validate(req.body)
    const user = await usersService.updateByIdOrUsername(target, options)

    res.json(user)
  } catch {
    res.sendStatus(400)
  }
}

export default { index, create, show, update }
