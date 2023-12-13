import axios from "axios";

export async function api_game_get_game_listComments(token, idUser, idGame) {
    let listComments = [];
    try {
        const result = await axios.get(
            global.apiLink + "Games/" + idGame + "/gameComments",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            for (const comment of result.data) {
                listComments.push({
                    id: comment.id,
                    name:
                        comment.author.firstName +
                        " " +
                        comment.author.lastName,
                    date: comment.createdAt.replace("T", " ").split(".")[0],
                    content: comment.text,
                    canDel: comment.author.id === idUser,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    listComments.sort((a, b) => b.id - a.id);
    return listComments;
}
