import axios from "axios";

export async function apiGetListTeamData(token) {
    let listTeam = [];
    try {
        const result = await axios.get(global.apiLink + "Teams", {});
        if (result.status == 200) {
            for (const team of result.data) {
                listTeam.push({
                    id: team.id,
                    name: team.teamName,
                    city: team.city,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    return listTeam;
}
