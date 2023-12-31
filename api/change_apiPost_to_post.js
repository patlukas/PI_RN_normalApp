import { change_apiListComments_to_listComments } from "./change_apiListComments_to_listComments";

export function change_apiPost_to_post(apiPosts, userId) {
    const { id, userName, firstName, lastName } = apiPosts.author;
    const { player, organizer, team, imageURL } = apiPosts.author;

    const comments = change_apiListComments_to_listComments(
        apiPosts.comments,
        userId
    );
    let name = userName;
    if (player !== null || organizer !== null) {
        name = firstName + " " + lastName;
    } else if (team !== null) name = team.teamName;

    const teamId = team !== null ? team.id : null;
    const playerId = player !== null ? player.id : null;

    const url = global.apiLink.replace("/api", "") + imageURL;
    return {
        id: apiPosts.id,
        teamId,
        playerId,
        name,
        text: apiPosts.text,
        date: apiPosts.createdAt.replace("T", " ").split(".")[0],
        imageURL: url,
        comments,
        canDel: id === userId,
    };
}
