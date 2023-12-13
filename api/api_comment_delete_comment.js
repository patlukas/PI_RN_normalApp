import axios from "axios";

export async function api_comment_delete_comment(token, commentId) {
    try {
        const result = await axios.delete(
            global.apiLink + "Comments/" + commentId,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) return "";
        return "Error during del comment.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during del comment.";
    }
}
