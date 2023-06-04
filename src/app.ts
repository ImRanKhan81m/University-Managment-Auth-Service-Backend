import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()



const corsConfig = {
    origin: true,
    credentials: true,
}
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!')
    next()
})

export default app
