import axios from "axios";
import { apiGetListTeamData } from "./apiGetListTeamData";

export async function apiGetListMatchesData(token) {
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
                let winner = -1;
                if (match.winnerId != 0 && match.winnerId == match.team1Id)
                    winner = 0;
                if (match.winnerId != 0 && match.winnerId == match.team2Id)
                    winner = 1;
                let date = match.startDate.split("T")[0];
                if (date === "0001-01-01") date = "";
                listMatches.push({
                    id: match.id,
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
