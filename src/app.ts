import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import httpStatus from 'http-status';

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

// handle not found routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API endpoint not found !',
      },
    ],
  });
  next();
});

// const testId = async () => {
//   const id = await generateFacultyId();
//   console.log(id);
// };

// testId();

export default app;
