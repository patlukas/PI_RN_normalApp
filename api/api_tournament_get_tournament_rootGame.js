import axios from "axios";

export async function api_tournament_get_tournament_rootGame(
    token,
    tournamentId
) {
    try {
        const result = await axios.get(
            global.apiLink + "Tournaments/" + tournamentId + "/rootGame",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) {
            let gamesInRound = {};
            get_list_game(result.data, gamesInRound);
            console.log(gamesInRound);
            return gamesInRound;
        }
    } catch (error) {
        console.log(error);
    }
    return {};
}

const get_list_game = (games, gamesInRound, round = 0) => {
    if (!(round in gamesInRound)) {
        gamesInRound[round] = [];
    }
    gamesInRound[round].push(change_apiGame_to_game(games));
    for (const game of games.children) {
        get_list_game(game, gamesInRound, round + 1);
    }
    return;
};

const change_apiGame_to_game = (apiGame) => {
    const {
        id,
        startDate,
        team1,
        team2,
        winnerId,
        state,
        team1Sets,
        team2Sets,
    } = apiGame;
    let winner = -1,
        nameH = "",
        nameG = "",
        url1 = "",
        url2 = "";
    if (team1 !== null) {
        if (team1.id == winnerId) winner = 0;
        nameH = team1.teamName;
        url1 = team1.user.imageUrl;
    }
    if (team2 !== null) {
        if (team2.id == winnerId) winner = 1;
        nameG = team2.teamName;
        url2 = team2.user.imageUrl;
    }
    let date = "";
    if (startDate !== "0001-01-01T00:00:00") {
        date = startDate.split("T")[0];
    }

    const baseUrl = global.apiLink.replace("/api", "");

    return {
        id,
        nameH,
        nameG,
        date,
        winner,
        resultH: team1Sets,
        resultG: team2Sets,
        imageH: baseUrl + url1,
        imageG: baseUrl + url2,
        isLive: state === "ongoing",
    };
};
