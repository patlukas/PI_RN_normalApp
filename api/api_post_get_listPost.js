import axios from "axios";
import { change_apiListPosts_to_listPosts } from "./change_apiListPosts_to_listPosts";

export async function api_post_get_listPost(token, userId) {
    try {
        const result = await axios.get(global.apiLink + "Posts", {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            return change_apiListPosts_to_listPosts(result.data, userId);
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}
