import axios from "axios";

export async function apiGetListPlayerData(token, idTeam = null) {
    let listPlayer = [];
    try {
        const result = await axios.get(global.apiLink + "Players", {});
        if (result.status == 200) {
            for (const player of result.data) {
                const { id, teamId, position, number } = player;
                const { firstName, lastName } = player.user;
                if (idTeam !== null && idTeam !== teamId) continue;
                listPlayer.push({
                    id,
                    teamId,
                    firstName,
                    lastName,
                    position,
                    number,
                    name: firstName + " " + lastName,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    return listPlayer;
}
