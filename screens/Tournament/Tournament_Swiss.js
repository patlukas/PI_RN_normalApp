import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import Tournament_Swiss_Table from "./Tournament_Swiss_Table";
import { api_tournament_get_tournament_swissTable } from "../../api/api_tournament_get_tournament_swissTable";
import OptionBar from "../../components/OptionBar";
import MatchList_List from "../MatchList/MatchList_List";

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
            <MatchList_List
                data={gamesInRound[option]}
                navigation={navigation}
            />
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: "auto" }}>
                <OptionBar
                    options={getOptionNames(listOptions)}
                    selected={option}
                    onSelect={setOption}
                    scrolled={true}
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
});

export default Tournament_Swiss;
