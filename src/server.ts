import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
const port: number = 5000

// database connection

async function bootstrap() {
    try {
        await mongoose.connect(config.databaseURL as string)
        console.log('Database connected😎')

        app.listen(config.port, () => {
            console.log(`Application is listening on port ${config.port}`)
        })
    } catch (error) {
        console.log('Failed to connect database 😖', error)
    }
}

bootstrap()



