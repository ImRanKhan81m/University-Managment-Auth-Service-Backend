import { RequestHandler } from 'express';
import { UserService } from './user.services';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    console.log(user);
    const result = await UserService.createUser(user);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createUser,
};
