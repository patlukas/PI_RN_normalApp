import axios from "axios";
import { change_apiListGame_to_listGame } from "./change_apiListGame_to_listGame";

export async function api_game_get_listGame(token) {
    try {
        const result = await axios.get(global.apiLink + "Games", {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            return change_apiListGame_to_listGame(result.data);
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}
