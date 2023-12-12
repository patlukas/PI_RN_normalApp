import { apiGetListTeamData } from "./api_team_get_listTeams";

export async function apiGetTournamentData(tournamentId, token) {
    //TODO
    const listTeam = await apiGetListTeamData(token);
    try {
        const result = await axios.get(global.apiLink + "Tournament", {});
        if (result.status == 200) {
            for (const tournament of result.data) {
                if (tournament.id !== tournamentId) continue;
                const { name, startDate, endDate, city, games } = tournament;
                let gamesInRound = {};
                for (const game of games) {
                    if (!game.round in gamesInRound)
                        gamesInRound[game.round] = [];
                    const { team1Id, team2Id, team1Sets, team2Sets } = game;
                    gamesInRound[game.round].push({
                        id: game.id,
                        team1Sets,
                        team2Sets,
                        team1Name: getTeamShortName(listTeam, team1Id),
                        team2Name: getTeamShortName(listTeam, team2Id),
                    });
                }
            }
            return {
                name,
                date: startDate.split("T")[0] + " -- " + endDate.split("T")[0],
                city,
                gamesInRound,
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

const getTeamShortName = (listTeam, teamId) => {
    for (const team of listTeam) {
        if (team.id === teamId) return team.shortName;
    }
    return "???";
};
