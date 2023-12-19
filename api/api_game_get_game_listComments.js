import axios from "axios";
import { change_apiListComments_to_listComments } from "./change_apiListComments_to_listComments";

export async function api_game_get_game_listComments(token, idUser, idGame) {
    try {
        const result = await axios.get(
            global.apiLink + "Games/" + idGame + "/gameComments",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            return change_apiListComments_to_listComments(result.data, idUser);
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}
