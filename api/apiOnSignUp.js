import axios from "axios";

export async function apiOnSignUp(
    firstName,
    lastName,
    email,
    password,
    password2
) {
    if (firstName == "") return "First name is empty.";
    if (lastName == "") return "Last name is empty.";
    if (email == "") return "E-mail is empty.";
    if (password == "") return "Password is empty.";
    if (password !== password2) return "Passwords are not equal.";
    try {
        const result = await axios.post(global.apiLink + "Users", {
            userCreate: {
                firstName: firstName,
                lastName: lastName,
                email: email,
            },
            password: password,
        });
        if (result.status == 200) return "";
        return "Error during registration.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during registration.";
    }
}
