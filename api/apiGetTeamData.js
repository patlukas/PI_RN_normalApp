import axios from "axios";

export async function apiGetTeamData(id, token) {
    try {
        const result = await axios.get(global.apiLink + "Teams/" + id, {});
        if (result.status == 200) {
            const { teamName, city, coachFullName } = result.data;
            return {
                id,
                name: teamName,
                city: city,
                coach: coachFullName,
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
