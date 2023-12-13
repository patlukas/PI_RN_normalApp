import axios from "axios";

export async function api_comment_post_comment(token, userId, postId, comment) {
    if (comment == "") return "Comment is empty";
    try {
        const result = await axios.post(
            global.apiLink + "Comments",
            {
                text: comment,
                authorId: userId,
                postId,
            },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) return "";
        return "Error during registration.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during registration.";
    }
}
