import jwt from "jsonwebtoken";
import asyncHandler from"express-async-handler";
import dotenv from 'dotenv';
dotenv.config();

const protect = asyncHandler(async (req, res, next) => {
    // console.log("req.headers.token", req.headers.token)
//   const token = req.cookies.jwt;
    const token = req.headers.token
//   console.log("token", token)
  if (token) {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      req.user = data.id;
      next();
    } catch (error) {
      res.status(400).json({ err: "Unauthorized Access" });
    }
  } else {
    res.status(400).json({ err: "Unauthorized Access" });
  }
});

export default protect;