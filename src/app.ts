import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'

import usersRouter from './modules/users/users.route'

const app: Application = express()

const corsConfig = {
  origin: true,
  credentials: true,
}
app.use(cors(corsConfig))
app.options('*', cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users', usersRouter)

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World! University Management System API is running.')
  next()
})

export default app
