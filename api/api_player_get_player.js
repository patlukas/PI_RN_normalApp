import axios from "axios";

export async function api_player_get_player(token, playerId) {
    try {
        const result = await axios.get(global.apiLink + "Players/" + playerId, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            const { id, number, position, teamId, userId, user } = result.data;
            const { teamName } = result.data.team;
            const { userName, firstName, lastName, imageURL } = user;
            const url = global.apiLink.replace("/api", "") + imageURL;
            console.log(url);
            return {
                id,
                number,
                position,
                teamId,
                teamName,
                userId,
                name: firstName + " " + lastName,
                username: userName,
                imageURL: url,
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
