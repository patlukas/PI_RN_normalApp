import axios from "axios";

export async function apiAddCommentToMatch(userId, gameId, token, comment) {
    if (comment == "") return "Comment is empty";
    try {
        const result = await axios.post(global.apiLink + "GameComments", {
            text: comment,
            authorId: userId,
            gameId,
        });
        if (result.status == 200) return "";
        return "Error during registration.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during registration.";
    }
}
