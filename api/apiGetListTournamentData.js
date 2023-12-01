import axios from "axios";

export async function apiGetListTournamentData(token, teamId = null) {
    let listTournaments = [];
    try {
        const result = await axios.get(global.apiLink + "Tournaments", {});
        if (result.status == 200) {
            for (const tournament of result.data) {
                if (teamId !== null) {
                    let isTeam = false;
                    for (const game of tournament.games) {
                        if (game.team1Id == teamId || game.team2Id == teamId) {
                            isTeam = true;
                            break;
                        }
                    }
                    if (!isTeam) continue;
                }
                const dateS = tournament.startDate.split("T")[0];
                const dateE = tournament.endDate.split("T")[0];
                listTournaments.push({
                    id: tournament.id,
                    name: tournament.name,
                    city: tournament.city,
                    date: dateS + "  --  " + dateE,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    return listTournaments;
}
