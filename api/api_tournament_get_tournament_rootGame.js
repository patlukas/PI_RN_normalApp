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
        // team1Sets, //TODO
        // team2Sets, //TODO
    } = apiGame;
    const team1Sets = 0,
        team2Sets = 0; // TODO
    let winner = -1,
        nameH = "",
        nameG = "";
    if (team1 !== null) {
        if (team1.id == winnerId) winner = 0;
        nameH = team1.teamName;
    }
    if (team2 !== null) {
        if (team2.id == winnerId) winner = 1;
        nameG = team2.teamName;
    }
    let date = "";
    if (startDate !== "0001-01-01T00:00:00") {
        date = startDate.split("T")[0];
    }

    const url =
        global.apiLink.replace("/api", "") + "Upload/UserImages/default.png"; // TODO

    return {
        id,
        nameH,
        nameG,
        date,
        winner,
        resultH: team1Sets,
        resultG: team2Sets,
        imageH: url,
        imageG: url,
        isLive: state === "ongoing",
    };
};
