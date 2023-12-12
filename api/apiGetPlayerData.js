import { apiGetListPlayerData } from "./apiGetListPlayerData";
import { api_team_get_listTeams } from "./api_team_get_listTeams";

export async function apiGetPlayerData(playerId, token) {
    //TODO
    const listTeam = await api_team_get_listTeams(token);
    const listPlayer = await apiGetListPlayerData(token);
    for (const player of listPlayer) {
        if (player.id !== playerId) continue;
        const { id, number, position, teamId, userId, name } = player;
        let teamName = "";
        for (const t of listTeam) {
            if (t.id === teamId) {
                teamName = t.name;
                break;
            }
        }
        return {
            id,
            number,
            position,
            teamId,
            teamName,
            userId,
            name,
        };
    }
    return false;
}