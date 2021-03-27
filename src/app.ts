import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import routes from './routes'
import env from './utils/env'

function createApplication() {
  const app = express()

  app.use(express.json())
  if (env.nodeEnv !== 'production') app.use(morgan('dev'))

  app.use(routes)

  return app
}

export default createApplication()
