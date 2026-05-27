export const create = async (profile) => {
    const transformedProfile = {
        name: profile.firstName + " " + profile.lastName,
        birthdate: profile.dob,
        "program": profile.course + " " + profile.major,
        "address": profile.address,
        "studentStatus": profile.status,
    }

    console.log(transformedProfile);


    const Response = await fetch(`https://ais-simulated-legacy.onrender.com/api/students`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transformedProfile)
    });

    console.log(Response);

    return await Response.json();
}