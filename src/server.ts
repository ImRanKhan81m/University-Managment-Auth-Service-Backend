import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'

// const {logger, errorLogger} = loggerFile

// database connection

async function bootstrap() {
  try {
    await mongoose.connect(config.databaseURL as string)
    logger.info('Database connected😎')

    app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database 😖', error)
  }
}

bootstrap()
