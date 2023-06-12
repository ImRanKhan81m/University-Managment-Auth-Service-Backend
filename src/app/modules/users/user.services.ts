import { IUser } from './user.interface';
import { User } from './user.model';
import config from '../../../config/index';
import { generateStudentId } from './user.utils';
import ApiError from '../../../errors/ApiError';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const academicSemester = {
    year: '2022',
    code: '01',
  };
  const id = await generateStudentId(academicSemester);

  user.id = id;

  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user!');
  }

  return createdUser;
};

export const UserService = {
  createUser,
};
