import axios from "axios";
import { change_apiListGame_to_listGame } from "./change_apiListGame_to_listGame";

export async function api_tournament_get_tournament(token, tournamentId) {
    try {
        const result = await axios.get(
            global.apiLink + "Tournaments/" + tournamentId,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            const {
                name,
                startDate,
                endDate,
                city,
                games,
                eliminationAlgorithm,
                teamCount,
            } = result.data;
            return {
                name,
                date: startDate.split("T")[0] + " -- " + endDate.split("T")[0],
                city,
                eliminationAlgorithm,
                teamCount,
                games: change_apiListGame_to_listGame(games),
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
