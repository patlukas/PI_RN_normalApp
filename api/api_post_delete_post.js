import axios from "axios";

export async function api_post_delete_post(token, postId) {
    try {
        const result = await axios.delete(global.apiLink + "Posts/" + postId, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) return "";
        return "Error during del comment.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during del comment.";
    }
}
