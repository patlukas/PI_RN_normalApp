import axios from "axios";

export async function api_auth_login(username, password) {
    try {
        const result = await axios.post(global.apiLink + "Auth/Login", {
            username,
            password,
        });
        if (result.status == 200) {
            const { user, token } = result.data;
            const { id, userName, firstName, lastName, email, imageURL } = user;
            const { teamId, playerId, organizerId } = user;
            return {
                id,
                token,
                username: userName,
                firstName,
                lastName,
                email,
                imageURL,
                playerId,
                teamId,
                organizerId,
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
