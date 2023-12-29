import React from "react";
import { FlatList } from "react-native";
import Tournament_Classic_ListGames_Element from "./Tournament_Classic_ListGames_Element";

const Tournament_Classic_ListGames = ({ data, navigation }) => {
    const onSelectTeam = (id) => {
        navigation.navigate("Match_Screen", { id });
    };

    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => (
                <Tournament_Classic_ListGames_Element
                    nameH={item.nameH}
                    nameG={item.nameG}
                    winner={item.winner}
                    date={item.date}
                    onPress={() => onSelectTeam(item.id)}
                    index={index}
                />
            )}
        />
    );
};

export default Tournament_Classic_ListGames;
