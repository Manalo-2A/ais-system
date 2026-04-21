
import connect from '../config/db.js';
import User from '../models/userModel.js';

export const registerUser = async (req, res) => {
    const { firstName,
            lastName,
            dob,
            course,
            major, 
            status, 
            address, 
            email, 
            password } = req.body;

    const conn = await connect();
    try {
        const userProfile = {
            firstName,
            lastName,
            dob,
            course,
            major, 
            status, 
            address, 
            email, 
            password
        }
        console.log(userProfile)
        conn.release();
        const userId = await User.insertUser(userProfile, email, password, conn);
        res.status(201).json({success: true, message: userId});
    } catch(e) {
        conn.release();
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }

};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const conn = await connect();
    try {
        const user = await User.loginUser(email, password, conn);
        res.status(200).json({success: true, message: user});
        
    } catch(e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}