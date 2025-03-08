import { User } from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(409).json({
        message: "You are already signed up, please login youself",
        success: false,
      });
    }

    // Create the user object
    const userCreated = new User({
      name,
      email,
      password,
    });

    // Save it as a separate step
    await userCreated.save();

    // Then send the response
    res
      .status(201)
      .json({ message: "Signup Successful", success: true, user: userCreated });
  } catch (err) {
    console.error("Error in signup:", err); // Add this to see the actual error
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const userExist = await User.findOne({ email });

//     if (!userExist) {
//       return res.status(403).json({
//         message: "Invalid Credentials",
//         success: false,
//       });
//     }

//     //compare password with hashed one
//     // const userPassCompared = await bcrypt.compare(password, userExist.password);
//     const userPassCompared = await userExist.comparePassword(password);

//     if (userPassCompared) {
//       return res.status(200).json({
//         message: "Login Succesfull",
//         success: true,
//         token: await userExist.generateToken(),
//         userId: userExist._id.toString(),
//       });
//     } else {
//       res.status(404).json({
//         message: "Invalid Email or Password",
//       });
//     }
//   } catch (err) {
//     console.error("Error in login:", err); // Add this to see the actual error
//     res.status(500).json({
//       message: "Internal server error",
//       success: false,
//       error: err.message,
//     });
//   }
// };

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Create the user object
    const userCreated = new User({
      name: "haider",
      email,
      password,
    });

    // Save it as a separate step
    await userCreated.save();

    // Then send the response
    return res
      .status(201)
      .json({ message: "Signup Successful", success: true, user: userCreated });
  } catch (err) {
    console.error("Error in login:", err); // Add this to see the actual error
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};
