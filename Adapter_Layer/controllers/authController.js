import * as AuthService from "../services/authService.js";

export const registerStudent = async (req, res) => {
    const {firstName, lastName, dob, course, major, status, address} = req.body;
    try{
        const studentProfile = {
            firstName, lastName, dob, course, major, status, address
        }

        const result = await AuthService.registerStudent(studentProfile);
        return res.status(200).json({
            success: true,
            message: result
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "An error occurred while registering the student: " + error.message
        });
    }
}