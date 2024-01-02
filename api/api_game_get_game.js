import axios from "axios";

export async function api_game_get_game(token, gameId) {
    try {
        const result = await axios.get(global.apiLink + "Games/" + gameId, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (result.status == 200) {
            const { state, startDate, currentSet, winnerId } = result.data;
            const { team1, team2, team1Sets, team2Sets } = result.data;
            const { set1Team1Points, set1Team2Points } = result.data;
            const { set2Team1Points, set2Team2Points } = result.data;
            const { set3Team1Points, set3Team2Points } = result.data;
            const { set4Team1Points, set4Team2Points } = result.data;
            const { set5Team1Points, set5Team2Points } = result.data;

            let team1Id = null,
                team2Id = null,
                team1Name = "",
                team2Name = "",
                url1 = "",
                url2 = "";
            if (team1 !== null) {
                team1Id = team1.id;
                team1Name = team1.teamName;
                url1 = global.apiLink.replace("/api", "") + team1.user.imageUrl;
            }
            if (team2 !== null) {
                team2Id = team2.id;
                team2Name = team2.teamName;
                url2 = global.apiLink.replace("/api", "") + team2.user.imageUrl;
            }

            const isEnd = state == "finished";
            let winner = -1;
            if (winnerId !== null && winnerId === team1Id) winner = 0;
            if (winnerId !== null && winnerId === team2Id) winner = 1;

            let date = startDate.split("T")[0];
            if (date == "0001-01-01") date = null;

            return {
                id: gameId,
                isEnd,
                setNow: currentSet,
                winner,
                date,
                isLive: state === "ongiong",
                teams: [
                    {
                        id: team1Id,
                        name: team1Name,
                        result: team1Sets,
                        imageURL: url1,
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
                        name: team2Name,
                        result: team2Sets,
                        imageURL: url2,
                        points: [
                            set1Team2Points,
                            set2Team2Points,
                            set3Team2Points,
                            set4Team2Points,
                            set5Team2Points,
                        ],
                    },
                ],
            };
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
