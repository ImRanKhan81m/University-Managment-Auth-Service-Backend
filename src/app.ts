import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

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
app.use('/api/v1', routes);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // res.send('Hello World! University Management System API is running.')
  next();
});

// global error handler
app.use(globalErrorHandler);

export default app;
