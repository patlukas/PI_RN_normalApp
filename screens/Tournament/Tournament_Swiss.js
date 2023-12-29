import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import Tournament_Classic_ListGames from "./Tournament_Classic_ListGames";
import Tournament_OptionsBar from "./Tournament_OptionsBar";
import Tournament_Swiss_Table from "./Tournament_Swiss_Table";
import { api_tournament_get_tournament_swissTable } from "../../api/api_tournament_get_tournament_swissTable";

const Tournament_Swiss = ({ tournamentId, navigation, games }) => {
    const { accountData } = useContext(AccountDataContext);
    const [option, setOption] = useState(0);
    const [tableDate, setTableData] = useState({});
    useEffect(() => {
        loadTableData();
    }, []);

    const loadTableData = async () => {
        setTableData(
            await api_tournament_get_tournament_swissTable(
                accountData.token,
                tournamentId
            )
        );
    };

    let gamesInRound = {};
    let listOptions = ["0"];
    for (const game of games) {
        if (!(game.round in gamesInRound)) {
            gamesInRound[game.round] = [];
            listOptions.push(game.round);
        }
        gamesInRound[game.round].push(game);
    }

    let optionEl = null;
    if (option == 0) {
        optionEl = (
            <Tournament_Swiss_Table data={tableDate} navigation={navigation} />
        );
    } else {
        optionEl = (
            <Tournament_Classic_ListGames
                data={gamesInRound[option]}
                navigation={navigation}
            />
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: "auto" }}>
                <Tournament_OptionsBar
                    rounds={listOptions}
                    setRound={setOption}
                    selected={option}
                    roundNames={getOptionNames(listOptions)}
                />
            </View>

            <View style={styles.container_draw}>{optionEl}</View>
        </View>
    );
};

const getOptionNames = (listOptions) => {
    let listOptionNames = ["Table"];
    for (const option of listOptions) {
        if (option === "0") continue;
        listOptionNames.push("Round " + option);
    }
    return listOptionNames;
};

const styles = StyleSheet.create({
    container_draw: {
        flex: 1,
    },
    btn_option: {
        width: "50%",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "#000",
        backgroundColor: "#ccc",
        borderLeftWidth: 1,
        borderLeftColor: "#999",
        paddingVertical: 3,
    },
});

export default Tournament_Swiss;
