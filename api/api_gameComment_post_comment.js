import axios from "axios";

export async function api_gameComment_post_comment(
    token,
    userId,
    gameId,
    comment
) {
    if (comment == "") return "Comment is empty";
    try {
        const result = await axios.post(
            global.apiLink + "GameComments",
            {
                text: comment,
                authorId: userId,
                gameId,
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
