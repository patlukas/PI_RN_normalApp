import { change_apiPost_to_post } from "./change_apiPost_to_post";

export function change_apiListPosts_to_listPosts(apiListPosts, userId) {
    let listPosts = [];

    for (const post of apiListPosts) {
        listPosts.push(change_apiPost_to_post(post, userId));
    }
    listPosts.sort((key = (a, b) => b.id - a.id));
    return listPosts;
}
