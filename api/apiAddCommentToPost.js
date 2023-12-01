import axios from "axios";

export async function apiAddCommentToPost(userId, postId, token, comment) {
    if (comment == "") return "Comment is empty";
    try {
        const result = await axios.post(global.apiLink + "Comments", {
            text: comment,
            authorId: userId,
            postId,
        });
        if (result.status == 200) return "";
        return "Error during registration.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during registration.";
    }
}
