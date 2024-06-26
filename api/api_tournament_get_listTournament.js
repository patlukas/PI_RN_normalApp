import axios from "axios";
import { change_apiListTournament_to_listTournament } from "./change_apiListTournament_to_listTournament";

export async function api_tournament_get_listTournament(token) {
    try {
        const result = await axios.get(global.apiLink + "Tournaments", {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            return change_apiListTournament_to_listTournament(result.data);
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}
