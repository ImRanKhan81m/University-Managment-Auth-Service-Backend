import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()



const corsFonfig = {
    origin: true,
    credentials: true,
}
app.use(express.json())
app.use(cors(corsFonfig));
app.options('*', cors(corsFonfig));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!')
    next()
})

export default app
