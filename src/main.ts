import app from './app'
import env from './utils/env'

app.listen(env.port, () => console.log(`[SERVER] is running on ${env.port}`))
