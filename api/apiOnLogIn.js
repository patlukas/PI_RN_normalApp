import axios from "axios";

export async function apiOnLogIn(username, password) {
    try {
        const result = await axios.post(global.apiLink + "Auth/Login", {
            username,
            password,
        });
        if (result.status == 200) {
            const { user, token } = result.data;
            const { id, userName, firstName, lastName, email, imageURL } = user;
            const result2 = await axios.get(global.apiLink + "Users/" + id, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (result2.status == 200) {
                return {
                    id,
                    token,
                    username: userName,
                    firstName,
                    lastName,
                    email,
                    imageURL,
                    playerId: result2.data.playerId,
                    teamId: result2.data.teamId,
                };
            }
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
