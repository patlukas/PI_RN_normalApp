import axios from "axios";
import { change_apiListPosts_to_listPosts } from "./change_apiListPosts_to_listPosts";

export async function api_player_get_player_listPosts(token, playerId, userId) {
    try {
        const result = await axios.get(
            global.apiLink + "Players/" + playerId + "/posts",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            return change_apiListPosts_to_listPosts(result.data, userId);
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}
