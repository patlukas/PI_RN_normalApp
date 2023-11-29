export function apiGetTeamData(id, token) {
    return {
        id: 1,
        name: "Team 1",
        city: "City 1",
        coach: "Coach 1",
        listTournaments: [
            {
                id: 4,
                name: "T 4",
                city: "City 1",
                date: "12.10.2023 - 13.11.2023",
            },
            {
                id: 5,
                name: "T 5",
                city: "City 1",
                date: "12.10.2023 - 13.11.2023",
            },
        ],
        listMatches: [
            {
                id: 3,
                nameH: "Team 1",
                nameG: "Team 3",
                resultH: 3,
                resultG: 2,
                date: "10-12-2023",
                winner: 1,
            },
            {
                id: 5,
                nameH: "Team 1",
                nameG: "Team 3",
                resultH: 2,
                resultG: 2,
                date: "10-12-2023",
                winner: -1,
            },
        ],
        listPosts: [
            { name: "Player Name 1", date: "12.11.2022", content: "Hej" },
            { name: "Player Name 2", date: "11.11.2022", content: "Hej" },
            {
                name: "Player Name 3",
                date: "10.11.2022",
                content:
                    "Hej wszystkim mam następujący błąd: 'PlayerListPlayerList_List.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (10:16)'",
            },
        ],
        listPlayers: [
            { name: "Player Name1", position: "rozgrywający" },
            { name: "Player Name2", position: "środkowy" },
            { name: "Player Name3", position: "libero" },
        ],
    };
}
