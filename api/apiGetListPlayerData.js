import axios from "axios";

export async function apiGetListPlayerData(token, idTeam = null) {
    token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdHVzZXIiLCJqdGkiOiI1OGY4MDNjZC0wN2M5LTQ4MDUtYjczZC0xNTI5OTI4MGU1YjUiLCJleHAiOjE3MDE4OTU4MzksImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.kNHMadKS8pZGN7MF5vPTly-XRuMVffNs_jfL1FFTLog";
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    console.log("2");
    let listPlayer = [];
    try {
        console.log("2.5");
        const result = await axios.get(global.apiLink + "Players", config);
        console.log("2.75");
        console.log(result.status);
        console.log(result.data);
        if (result.status == 200) {
            for (const player of result.data) {
                const { id, teamId, position, number } = player;
                const { firstName, lastName } = player.user;
                if (idTeam !== null && idTeam !== teamId) continue;
                listPlayer.push({
                    id,
                    teamId,
                    firstName,
                    lastName,
                    position,
                    number,
                    name: firstName + " " + lastName,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    return listPlayer;
}
