export function apiGetMatchData(id, token) {
    return {
        id: 1,
        isEnd: false,
        setNow: 3,
        winner: 1,
        date: "11.12.2022",
        teams: [
            {
                id: 1,
                name: "Team 1",
                result: 0,
                points: [25, 27, 17, 0, 0],
            },
            {
                id: 2,
                name: "Team 2",
                result: 0,
                points: [16, 25, 18, 0, 0],
            },
        ],
        listPosts: [
            { name: "Player Name 1", date: "12.11.2022", content: "Hej" },
            { name: "Player Name 2", date: "11.11.2022", content: "Hej" },
        ],
    };
}
