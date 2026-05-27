import * as UserModel from "../models/UserModel.js";

// REGISTER
export const register = async (req, res) => {
  const { 
    email,
    password,
    firstName,
    lastName,   
    dob,
    course,
    major,
    address      
  } = req.body
  try {
    const userProfile = { firstName, lastName, dob, course, major, address }; 
    const user = await UserModel.createUser(userProfile, email, password)
    res.status(200).json({ success: true, message: [{ result: 'registration successful' }] })
  
  } catch (e) {
      console.log(e);
      res.status(e.statusCode || 500).json({
          success: false,
          message: e.message
      });
    }
};

// LOGIN
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await UserModel.login(email, password);

        res.status(200).json({
            success: true,
            message: "Login successful",
            token
        });

    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
};