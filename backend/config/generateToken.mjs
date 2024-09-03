import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRES,
  });
};

export default generateToken;