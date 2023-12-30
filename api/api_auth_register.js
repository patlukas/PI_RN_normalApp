import axios from "axios";

export async function api_auth_register(
    username,
    firstName,
    lastName,
    email,
    password,
    password2
) {
    if (username == "") return "Username is empty.";
    if (firstName == "") return "First name is empty.";
    if (lastName == "") return "Last name is empty.";
    if (email == "") return "E-mail is empty.";
    if (password == "") return "Password is empty.";
    if (password !== password2) return "Passwords are not equal.";
    if (!validateEmail(email))
        return "The Email field is not a valid e-mail address.";
    if (!validatePassword(password))
        return "Password must have min 8 char, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special char.";
    try {
        const result = await axios.post(global.apiLink + "Auth/Register", {
            username,
            firstName,
            lastName,
            email,
            password,
        });
        if (result.status == 200) return "";
        return result.message;
    } catch (error) {
        if (error.response) {
            return error.response.data.message;
        } else if (error.request) {
            console.log("No response received:", error.request);
        } else {
            console.log("Error creating request:", error.message);
        }
        return "Unexpected error during registration.";
    }
}

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (email) => {
    return email.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );
};
