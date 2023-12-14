import axios from "axios";
import { change_apiListGame_to_listGame } from "./change_apiListGame_to_listGame";
import { change_apiListPlayer_to_listPlayer } from "./change_apiListPlayer_to_listPlayer";

export async function api_team_get_team(token, teamId) {
    try {
        const result = await axios.get(global.apiLink + "Teams/" + teamId, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            const { id, teamName, shortTeamName, city } = result.data;
            const { coachFullName, players } = result.data;
            const { team1Games, team2Games } = result.data;
            const games = team1Games.concat(team2Games);
            let listPlayer = change_apiListPlayer_to_listPlayer(players);
            let listGame = change_apiListGame_to_listGame(games);
            console.log("L", listPlayer);
            return {
                id,
                teamName,
                shortTeamName,
                city,
                coachFullName,
                listPlayer,
                listGame,
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
