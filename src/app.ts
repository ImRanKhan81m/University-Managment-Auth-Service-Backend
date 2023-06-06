import express, { Application } from 'express'
import cors from 'cors'

import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

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

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Hello World! University Management System API is running.')
//   // next()

//   // next(new ApiError(404, 'Not Found'))

// })

// global error handler
app.use(globalErrorHandler)

export default app
