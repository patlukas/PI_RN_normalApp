export function change_apiListTournament_to_listTournament(apiListTournament) {
    let listTournament = [];
    for (const tournament of apiListTournament) {
        const dateS = tournament.startDate.split("T")[0];
        const dateE = tournament.endDate.split("T")[0];
        listTournament.push({
            id: tournament.id,
            name: tournament.name,
            city: tournament.city,
            date: dateS + "  --  " + dateE,
        });
    }
    return listTournament;
}
