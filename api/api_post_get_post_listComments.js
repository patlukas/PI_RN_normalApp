import axios from "axios";
import { change_apiListComments_to_listComments } from "./change_apiListComments_to_listComments";

export async function api_post_get_post_listComments(token, userId, idPost) {
    try {
        const result = await axios.get(
            global.apiLink + "Posts/" + idPost + "/comments",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            return change_apiListComments_to_listComments(result.data, userId);
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}
