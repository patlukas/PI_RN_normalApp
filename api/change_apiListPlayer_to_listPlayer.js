export function change_apiListPlayer_to_listPlayer(apiListPlayer) {
    let listPlayer = [];
    for (const player of apiListPlayer) {
        const { id, number, position, team, teamId, user } = player;
        const { firstName, lastName, imageURL } = user; 
        const { teamName, shortTeamName } = team;
        const name = firstName + " " + lastName;
        const url = global.apiLink.replace("/api", "") + imageURL;
        listPlayer.push({
            id,
            teamId,
            firstName,
            lastName,
            position,
            number,
            name,
            teamName,
            shortTeamName,
            imageURL: url,
        });
    }
    return listPlayer;
}
