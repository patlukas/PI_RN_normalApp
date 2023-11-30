import axios from "axios";
import { apiGetListTeamData } from "./apiGetListTeamData";

export async function apiGetMatchData(id, token) {
    const listTeam = await apiGetListTeamData();
    const teamsIdToName = {};
    for (const team of listTeam) {
        teamsIdToName[team.id] = team.name;
    }
    try {
        const result = await axios.get(global.apiLink + "Games/" + id, {});
        if (result.status == 200) {
            const {
                status,
                currentSet,
                winnerId,
                team1Id,
                team2Id,
                startDate,
                team1Sets,
                team2Sets,
            } = result.data;
            const {
                set1Team1Points,
                set2Team1Points,
                set3Team1Points,
                set4Team1Points,
                set5Team1Points,
            } = result.data;
            const {
                set1Team2Points,
                set2Team2Points,
                set3Team2Points,
                set4Team2Points,
                set5Team2Points,
            } = result.data;
            const isEnd = status == "finished";
            const setNow = currentSet;
            let winner = -1;
            if (winnerId !== null && winnerId === team1Id) winner = 0;
            if (winnerId !== null && winnerId === team2Id) winner = 1;
            
            const date = startDate.split("T")[0];
            return {
                id,
                isEnd,
                setNow,
                winner,
                date,
                teams: [
                    {
                        id: team1Id,
                        name: teamsIdToName[team1Id],
                        result: team1Sets,
                        points: [
                            set1Team1Points,
                            set2Team1Points,
                            set3Team1Points,
                            set4Team1Points,
                            set5Team1Points,
                        ],
                    },
                    {
                        id: team2Id,
                        name: teamsIdToName[team2Id],
                        result: team2Sets,
                        points: [
                            set1Team2Points,
                            set2Team2Points,
                            set3Team2Points,
                            set4Team2Points,
                            set5Team2Points,
                        ],
                    },
                ],
                listPosts: [
                    {
                        name: "Player Name 1",
                        date: "12.11.2022",
                        content: "Hej",
                    },
                    {
                        name: "Player Name 2",
                        date: "11.11.2022",
                        content: "Hej",
                    },
                ],
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;

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
