import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, JWT Token is required" });
  }

  //   console.log("token from auth middleware: ", token);

  //   const jwtToken = token.replace("Bearer", "").trim();
  //   console.log("token from auth middleware: ", jwtToken);

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decode);

    const userData = await User.findOne({ email: decode.email }).select({
      password: 0,
    });
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized, Invalid Token" });
  }
};

export default authMiddleware;
