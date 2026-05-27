
import * as AuthAdapter from '../adapters/authAdapter.js';

export const registerStudent = async (studentProfile) => {

    console.log("RECEIVED STUDENT PROFILE:", studentProfile);

    const requiredFields = [
        "firstName",
        "lastName",
        "dob",
        "course",
        "major",
        "address",
        "studentStatus"
    ];

    const missing = requiredFields.filter(field => !studentProfile[field]);

    if (missing.length > 0) {
        console.log("MISSING FIELDS:", missing);
        throw new Error("Missing fields: " + missing.join(", "));
    }

    return await AuthAdapter.create(studentProfile);
};
