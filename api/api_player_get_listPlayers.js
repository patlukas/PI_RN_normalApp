import axios from "axios";
import { change_apiListPlayer_to_listPlayer } from "./change_apiListPlayer_to_listPlayer";

export async function api_player_get_listPlayers(token) {
    try {
        const result = await axios.get(global.apiLink + "Players", {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            return change_apiListPlayer_to_listPlayer(result.data);
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}
