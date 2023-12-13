import axios from "axios";

export async function api_gameComment_delete_comment(token, gameId, commentId) {
    try {
        console.log(
            global.apiLink +
                "GameComments/" +
                gameId +
                "?gameCommentId=" +
                commentId
        );
        const result = await axios.delete(
            global.apiLink +
                "GameComments/" +
                gameId +
                "?gameCommentId=" +
                commentId,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) return "";
        return "Error during del game comment.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during del game comment.";
    }
}
