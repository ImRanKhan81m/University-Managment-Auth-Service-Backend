import { Secret } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

const createToken = (
  payload: object,
  secret: Secret,
  expireTime: string
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: expireTime,
  });
};

export const jwtHelpers = {
  createToken,
};
