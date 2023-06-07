import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
// import ApiError from './errors/ApiError'

const app: Application = express();

const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/users', UserRoutes);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // res.send('Hello World! University Management System API is running.')
  next();

  // Promise.reject(new Error('Unhandled server error!'))

  // next(new ApiError(400, 'server error!'))
});

// global error handler
app.use(globalErrorHandler);

export default app;
