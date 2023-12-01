import axios from "axios";

export async function apiAddPost(userId, text, token) {
    if (text == "") return "Text is empty";
    try {
        const result = await axios.post(global.apiLink + "Posts", {
            text,
            authorId: userId,
        });
        if (result.status == 200) return "";
        return "Error during add post.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during add post.";
    }
}
