import axios from "axios";
import { change_apiListPosts_to_listPosts } from "./change_apiListPosts_to_listPosts";

export async function api_team_get_team_listPosts(token, teamId, userId) {
    try {
        const result = await axios.get(
            global.apiLink + "Teams/" + teamId + "/posts",
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
