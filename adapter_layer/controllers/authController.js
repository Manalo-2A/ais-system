import * as AuthService from '../services/authService.js';

export const registerStudent = async (req, res) => {
    const { email, password, firstName, lastName, dob, course, major, address, studentStatus } = req.body;
    try {
        const studentProfile = {
            email, password, firstName, lastName, dob, course, major, address, studentStatus
        }

        const response = await AuthService.registerStudent(studentProfile);
        res.status(201).json({
            success: true,
            message: response
        });
    } catch (error) {
        console.error("REGISTER ERROR:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while registering the student."
        });
    }
}