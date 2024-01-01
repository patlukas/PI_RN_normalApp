import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_tournament_get_tournament_rootGame } from "../../api/api_tournament_get_tournament_rootGame";
import MatchList_List from "../MatchList/MatchList_List";
import OptionBar from "../../components/OptionBar";

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
        setRound(0);
    };
    console.log(listRounds);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: "auto" }}>
                <OptionBar
                    options={getRoundNames(listRounds, tournamentType)}
                    selected={round}
                    onSelect={setRound}
                    scrolled={true}
                />
            </View>

            <View style={styles.container_draw}>
                <MatchList_List
                    data={tournamentGamesInRound[listRounds.length - round - 1]}
                    navigation={navigation}
                    addEvenSeparator={true}
                />
            </View>
        </View>
    );
};

const getRoundNames = (listRounds, tournamentType) => {
    if (tournamentType === "SingleElimination") {
        const options = [
            "Final",
            "Semifinal",
            "Quarterfinal",
            "1/8 finals",
            "1/16 finals",
            "1/32 finals",
            "1/64 finals",
        ];
        let list = [];
        for (const round of listRounds) {
            list.push(options[parseInt(round)]);
        }

        return list;
    } else {
        let listRoundNames = [];
        for (const round of listRounds) {
            listRoundNames.push(
                "Round " + (listRounds.length - parseInt(round))
            );
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
