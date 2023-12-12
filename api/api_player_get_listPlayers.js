import axios from "axios";

export async function api_player_get_listPlayers(token, idTeam = null) {
    let listPlayer = [];
    try {
        const result = await axios.get(global.apiLink + "Players", {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            for (const player of result.data) {
                const { id, number, position, team, teamId, user } = player;
                const { firstName, lastName, imageURL } = user;
                const { teamName, shortTeamName } = team;
                const name = firstName + " " + lastName;
                const url = global.apiLink.replace("/api", "") + imageURL;
                if (idTeam !== null && idTeam !== teamId) continue;
                listPlayer.push({
                    id,
                    teamId,
                    firstName,
                    lastName,
                    position,
                    number,
                    name,
                    teamName,
                    shortTeamName,
                    imageURL: url,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    return listPlayer;
}
