import axios from "axios";

export async function api_team_get_listTeams(token) {
    let listTeam = [];
    try {
        const result = await axios.get(global.apiLink + "Teams", {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            for (const team of result.data) {
                listTeam.push({
                    id: team.id,
                    name: team.teamName,
                    shortName: team.shortTeamName,
                    city: team.city,
                    coachFullName: team.coachFullName,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    return listTeam;
}
