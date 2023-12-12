import axios from "axios";

export async function api_post_post_post(token, userId, text) {
    if (text == "") return "Text is empty";
    try {
        const result = await axios.post(
            global.apiLink + "Posts",
            {
                text,
                authorId: userId,
            },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) return true;
        return "Error during add post.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during add post.";
    }
}
