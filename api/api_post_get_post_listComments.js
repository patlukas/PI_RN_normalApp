import axios from "axios";

export async function api_post_get_post_listComments(token, idUser, idPost) {
    let listComments = [];
    try {
        const result = await axios.get(
            global.apiLink + "Posts/" + idPost + "/comments",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            for (const comment of result.data) {
                listComments.push({
                    id: comment.id,
                    name: "",
                    date: comment.createdAt.replace("T", " ").split(".")[0],
                    content: comment.text,
                    canDel: false,
                    // canDel: comment.authorId === idUser,
                });
            }
        }
    } catch (error) {
        console.log("L", error);
    }
    listComments.sort((a, b) => b.id - a.id);
    return listComments;
}
