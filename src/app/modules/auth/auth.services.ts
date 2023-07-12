import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  const user = new User();

  const isUserExists = await user.isUserExist(id);

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }

  if (
    isUserExists.password &&
    !user.isPasswordMatch(password, isUserExists.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect !');
  }
};

export const AuthServices = {
  loginUser,
};
