import axios from "axios";

export async function api_player_get_player_listPosts(token, playerId) {
    let listPosts = [];
    try {
        const result = await axios.get(
            global.apiLink + "Players/" + playerId + "/posts",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            for (const post of result.data) {
                let listComment = [];
                for (const comment of post.comments) {
                    listComment.push({
                        id: comment.id,
                        text: comment.text,
                        date: comment.createdAt.replace("T", " ").split(".")[0],
                        author: comment.author.userName,
                    });
                }

                listPosts.push({
                    id: post.id,
                    name: null,
                    text: post.text,
                    date: post.createdAt.replace("T", " ").split(".")[0],
                    comments: listComment,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    listPosts.sort((key = (a, b) => b.id - a.id));
    return listPosts;
}
