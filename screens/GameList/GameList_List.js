import React from "react";
import { FlatList } from "react-native";
import GameList_Element from "./GameList_Element";

const GameList_List = ({ data, navigation }) => {
    const onSelectTeam = (id) => {
        navigation.navigate("Match_Screen", { id });
    };

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <GameList_Element
                    nameH={item.nameH}
                    nameG={item.nameG}
                    resultH={item.resultH}
                    resultG={item.resultG}
                    winner={item.winner}
                    date={item.date}
                    onPress={() => onSelectTeam(item.id)}
                />
            )}
        />
    );
};

export default GameList_List;
