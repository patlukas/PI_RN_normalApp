import axios from "axios";

export async function apiGetListTournamentData(token) {
    let listTournaments = [];
    try {
        const result = await axios.get(global.apiLink + "Tournaments", {});
        if (result.status == 200) {
            console.log(result.data);
            for (const tournament of result.data) {
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
