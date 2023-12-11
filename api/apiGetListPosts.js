import axios from "axios";
import { apiGetListUserData } from "./apiGetListUserData";

export async function apiGetListPosts(token) {
    console.log("1");
    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdHVzZXIiLCJqdGkiOiIwYmNlMjM3NC0yY2EzLTRjY2EtODVhMi04NWI3ZGQ0NTIzNTgiLCJleHAiOjE3MDE4OTIzNzUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.mzVBVRHRGu3QUVdJ-59pDRRc417GrlJskC6N9gP-HDk`,
        },
    };
    const listUsers = await apiGetListUserData();
    const userIdToName = {};
    for (const user of listUsers) {
        userIdToName[user.id] = user.firstName + " " + user.lastName;
    }
    let listPosts = [];
    try {
        const result = await axios.get(global.apiLink + "Posts", {}, config);
        if (result.status == 200) {
            for (const post of result.data) {
                listPosts.push({
                    id: post.id,
                    name: userIdToName[post.authorId],
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
