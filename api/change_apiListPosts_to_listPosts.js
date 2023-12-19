import { change_apiListComments_to_listComments } from "./change_apiListComments_to_listComments";

export function change_apiListPosts_to_listPosts(apiListPosts, userId) {
    let listPosts = [];

    for (const post of apiListPosts) {
        id = post.author.id;
        userName = post.author.userName;
        firstName = post.author.firstName;
        lastName = post.author.lastName;
        player = post.author.player;
        organizer = post.author.organizer;
        team = post.author.team;

        const comments = change_apiListComments_to_listComments(
            post.comments,
            userId
        );
        let name = userName;
        if (player !== null || organizer !== null) {
            name = firstName + " " + lastName;
        } else if (team !== null) name = team.teamName;

        listPosts.push({
            id: post.id,
            name,
            text: post.text,
            date: post.createdAt.replace("T", " ").split(".")[0],
            comments,
            canDel: id === userId,
        });
    }
    listPosts.sort((key = (a, b) => b.id - a.id));
    return listPosts;
}
