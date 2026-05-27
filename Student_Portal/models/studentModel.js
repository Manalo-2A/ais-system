export const createStudent = async (studentData) => {
    const response = await fetch(`http://localhost:4000/api/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
    });

    if (!response.ok) {
        throw new Error('Failed to create student record.');
    }

    return await response.json();
};

export const getStudentProfile = async (studentId) => {
    // Fetches from the Adapter Layer
    const response = await fetch(`http://localhost:4000/api/profile/${studentId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        const error = new Error('Student profile not found in the legacy system.');
        error.statusCode = response.status;
        throw error;
    }

    const profileData = await response.json();
    return profileData;
};

export const getAllProfiles = async () => {
    const response = await fetch(`http://localhost:4000/api/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Could not retrieve student list.');
    }

    return await response.json();
};