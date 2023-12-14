export function change_apiListComments_to_listComments(
    apiListComments,
    userId
) {
    let listComments = [];
    for (const comment of apiListComments) {
        const { userName, firstName, lastName } = comment.author;
        const { player, organizer, team } = comment.author;
        let name = userName;
        if (player !== null || organizer !== null) {
            name = firstName + " " + lastName;
        } else if (team !== null) name = team.teamName;
        listComments.push({
            id: comment.id,
            text: comment.text,
            date: comment.createdAt.replace("T", " ").split(".")[0],
            name,
            canDel: comment.author.id === userId,
        });
    }
    listComments.sort((key = (a, b) => b.id - a.id));
    return listComments;
}
