import * as ProfileService from "../services/profileService.js";

export const create = async (req, res) => {
    try {
        const result = await ProfileService.createStudent(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const getProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await ProfileService.getStudentProfile(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || "Profile not found."
        });
    }
};

export const listAll = async (req, res) => {
    try {
        const result = await ProfileService.listAllStudents();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};