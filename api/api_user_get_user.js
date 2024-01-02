import axios from "axios";

export async function api_user_get_user(token, userId) {
    try {
        const result = await axios.get(global.apiLink + "Users/" + userId, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            const { id, userName, firstName, lastName, imageURL } = result.data;
            const { teamId, playerId } = result.data;
            const url = global.apiLink.replace("/api", "") + imageURL;
            return {
                id,
                userName,
                name: firstName + " " + lastName,
                imageURL: url,
                teamId,
                playerId,
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
