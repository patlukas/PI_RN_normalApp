import axios from "axios";
import { change_apiPost_to_post } from "./change_apiPost_to_post";

export async function api_post_get_post(token, userId, postId) {
    try {
        const result = await axios.get(global.apiLink + "Posts/" + postId, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            return change_apiPost_to_post(result.data, userId);
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
