import axios from "axios";

export async function api_game_get_listGame(token, teamId = null) {
    const listGame = [];
    try {
        const result = await axios.get(global.apiLink + "Games", {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            for (const game of result.data) {
                const { id, winnerId, team1, team2, startDate } = game;
                const { team1Id, team2Id, team1Sets, team2Sets } = game;
                if (teamId !== null && teamId !== team1Id && teamId !== team2Id)
                    continue;
                if (team1 === null && team2 === null) continue;
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
        }
    } catch (error) {
        console.log(error);
    }
    return listGame;
}
