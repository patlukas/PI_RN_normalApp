import axios from "axios";
import { change_apiListTournament_to_listTournament } from "./change_apiListTournament_to_listTournament";

export async function api_team_get_team_listTournament(token, teamId) {
    try {
        const result = await axios.get(
            global.apiLink + "Teams/" + teamId + "/tournaments",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            return change_apiListTournament_to_listTournament(result.data);
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}
