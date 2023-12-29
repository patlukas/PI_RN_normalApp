import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_tournament_get_tournament_rootGame } from "../../api/api_tournament_get_tournament_rootGame";
import Tournament_Classic_ListGames from "./Tournament_Classic_ListGames";
import Tournament_OptionsBar from "./Tournament_OptionsBar";

const Tournament_Classic = ({ tournamentId, tournamentType, navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [round, setRound] = useState(0);
    const [listRounds, setListRounds] = useState([]);
    const [tournamentGamesInRound, setTournamentGamesInRound] = useState({});
    useEffect(() => {
        loadTournamentGames();
    }, []);

    const loadTournamentGames = async () => {
        const games = await api_tournament_get_tournament_rootGame(
            accountData.token,
            tournamentId
        );
        const rounds = Object.keys(games).reverse();
        setTournamentGamesInRound(games);
        setListRounds(rounds);
        setRound(rounds[0]);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: "auto" }}>
                <Tournament_OptionsBar
                    rounds={listRounds}
                    setRound={setRound}
                    selected={round}
                    roundNames={getRoundNames(listRounds, tournamentType)}
                />
            </View>

            <View style={styles.container_draw}>
                <Tournament_Classic_ListGames
                    data={tournamentGamesInRound[round]}
                    navigation={navigation}
                />
            </View>
        </View>
    );
};

const getRoundNames = (listRounds, tournamentType) => {
    console.log("H", tournamentType, listRounds);
    if (tournamentType === "SingleElimination") {
        return [
            "Final",
            "Semifinal",
            "Quarterfinal",
            "1/8 finals",
            "1/16 finals",
            "1/32 finals",
            "1/64 finals",
        ];
    } else {
        let listRoundNames = [];
        for (const round of listRounds) {
            listRoundNames.push("Round " + (parseInt(round) + 1));
        }
        console.log(listRoundNames);
        return listRoundNames;
    }
};

const styles = StyleSheet.create({
    container_draw: {
        flex: 1,
    },
});

export default Tournament_Classic;
