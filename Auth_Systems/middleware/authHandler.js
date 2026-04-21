import jwt from "jsonwebtoken";
import * as UserModel from "../models/userModel.js";

export const authHandler = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            success: false,
            message: [{ result: "You do not have permission to access the app." }]
        });
    }

    const token = authorization.split(" ")[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.getUser(payload.id);

        if (!user || user.length === 0) {
            return res.status(401).json({
                success: false,
                message: [{ result: "Request is unauthorized." }]
            });
        }
        req.user = user[0]; // attach the first (and only) user row
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            success: false,
            message: [{ result: "Request is unauthorized." }]
        });
    }
}