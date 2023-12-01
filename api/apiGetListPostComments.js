import axios from "axios";
import { apiGetListUserData } from "./apiGetListUserData";

export async function apiGetListPostComments(idUser, idPost, token) {
    const listUsers = await apiGetListUserData();
    const userIdToName = {};
    for (const user of listUsers) {
        userIdToName[user.id] = user.firstName + " " + user.lastName;
    }
    let listComments = [];
    console.log(userIdToName);
    try {
        const result = await axios.get(
            global.apiLink + "Posts/" + idPost + "/comments",
            {}
        );
        if (result.status == 200) {
            for (const comment of result.data) {
                listComments.push({
                    id: comment.id,
                    name: userIdToName[comment.authorId],
                    date: comment.createdAt.replace("T", " ").split(".")[0],
                    content: comment.text,
                    canDel: comment.authorId === idUser,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    listComments.sort((a, b) => b.id - a.id);
    return listComments;
}
