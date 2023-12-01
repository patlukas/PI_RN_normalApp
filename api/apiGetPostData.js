import axios from "axios";

export async function apiGetPostData(postId, token) {
    try {
        const result = await axios.get(global.apiLink + "Posts/" + postId, {});
        if (result.status == 200) {
            const { id, text, createdAt } = result.data;
            const date = createdAt.replace("T", " ").split(".")[0];
            return {
                id,
                text,
                date,
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
