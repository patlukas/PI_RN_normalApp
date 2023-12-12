import axios from "axios";
import { apiGetListTeamData } from "./api_team_get_listTeams";

export async function apiGetListMatchesData(token, teamId = null) {
    let listMatches = [];
    const listTeam = await apiGetListTeamData();
    const teamsIdToName = {};
    for (const team of listTeam) {
        teamsIdToName[team.id] = team.name;
    }
    try {
        const result = await axios.get(global.apiLink + "Games", {});
        if (result.status == 200) {
            for (const match of result.data) {
                const { id, winnerId, team1Id, team2Id, startDate } = match;
                if (teamId !== null && teamId !== team1Id && teamId !== team2Id)
                    continue;
                let winner = -1;
                if (winnerId != 0 && winnerId == team1Id) winner = 0;
                if (winnerId != 0 && winnerId == team2Id) winner = 1;
                let date = startDate.split("T")[0];
                if (date === "0001-01-01") date = "";
                listMatches.push({
                    id,
                    nameH: teamsIdToName[match.team1Id],
                    nameG: teamsIdToName[match.team2Id],
                    resultH: match.team1Sets,
                    resultG: match.team2Sets,
                    date,
                    winner,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    return listMatches;
}
