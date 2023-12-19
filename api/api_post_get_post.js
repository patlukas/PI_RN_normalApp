import axios from "axios";

export async function api_post_get_post(token, userId, postId) {
    try {
        const result = await axios.get(global.apiLink + "Posts/" + postId, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            const { id, text, createdAt, author, comments } = result.data;
            const date = createdAt.replace("T", " ").split(".")[0];
            return {
                id,
                text,
                date,
                canDel: author.id === userId,
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
