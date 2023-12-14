export function change_apiListGame_to_listGame(apiListGame) {
    let listGame = [];
    for (const game of apiListGame) {
        const { id, winnerId, team1, team2, startDate } = game;
        const { team1Id, team2Id, team1Sets, team2Sets } = game;
        if (team1Id === null || team2Id === null) continue;
        const nameH = "" ? team1 === null : team1.teamName;
        const nameG = "" ? team2 === null : team2.teamName;
        let winner = -1;
        if (winnerId !== null) {
            if (winnerId === team1Id) winner = 0;
            else if (winnerId === team2Id) winner = 1;
        }
        let date = startDate.replace("T", " ");
        if (date === "0001-01-01 00:00:00") date = "";
        listGame.push({
            id,
            nameH,
            nameG,
            resultH: team1Sets,
            resultG: team2Sets,
            date,
            winner,
        });
    }
    return listGame;
}
