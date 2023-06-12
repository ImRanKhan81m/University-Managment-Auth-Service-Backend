import { Request, Response } from 'express';
import { UserService } from './user.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  const result = await UserService.createUser(userData);

  sendResponse(res, {
    success: true,
    message: 'User created successfully!',
    data: result,
    statusCode: httpStatus.OK,
  });
});

export const UserController = {
  createUser,
};
