import axios from "axios";

export async function api_tournament_get_tournament_swissTable(
    token,
    tournamentId
) {
    try {
        const result = await axios.get(
            global.apiLink + "Tournaments/" + tournamentId + "/swissTable",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            let listTeam = [];
            for (const team of result.data) {
                listTeam.push({
                    id: team.team.id,
                    name: team.team.teamName,
                    shortName: team.team.shortTeamName,
                    hasPause: team.hasPause,
                    points: team.points,
                });
            }
            return listTeam;
        }
    } catch (error) {
        console.log(error);
    }
    return {};
}
