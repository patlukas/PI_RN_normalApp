import axios from "axios";

export async function apiDelGameComment(token, gameId, commentId) {
    try {
        const result = await axios.delete(
            global.apiLink +
                "GameComments/" +
                gameId +
                "?gameCommentId=" +
                commentId,
            {}
        );
        if (result.status == 200) return "";
        return "Error during del game comment.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during del game comment.";
    }
}
