import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// //password hashing with bcrypt
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }

//   try {
//     const saltRound = await bcrypt.genSalt(10);
//     const hash_passwword = await bcrypt.hash(this.password, saltRound);
//     this.password = hash_passwword;
//   } catch (error) {
//     next(error);
//   }
// });

// //comparing new password with the previous one with bcrypt
// userSchema.methods.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

//jsonwebtoken
// They are not stored in db instead they stored in web browser in form of (cookies or local storage)

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const User = mongoose.model("User", userSchema);
