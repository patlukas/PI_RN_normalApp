import axios from "axios";

export async function apiGetTeamListPosts(teamId, token) {
    let listPosts = [];
    try {
        const result = await axios.get(
            global.apiLink + "Teams/" + teamId + "/posts",
            {}
        );
        if (result.status == 200) {
            for (const post of result.data) {
                listPosts.push({
                    id: post.id,
                    text: post.text,
                    date: post.createdAt.replace("T", " ").split(".")[0],
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    listPosts.sort((key = (a, b) => b.id - a.id));
    return listPosts;
}
