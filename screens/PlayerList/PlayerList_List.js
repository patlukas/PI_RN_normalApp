import React from "react";
import { FlatList } from "react-native";
import PlayerList_Element from "./PlayerList_Element";

const PlayerList_List = ({ data, navigation }) => {
    const onSelectPlayer = (id) => {
        navigation.navigate("Player_Screen", { id });
    };
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <PlayerList_Element
                    name={item.name}
                    position={item.position}
                    number={item.number}
                    imageURL={item.imageURL}
                    shortTeamName={item.shortTeamName}
                    onPress={() => onSelectPlayer(item.id)}
                />
            )}
        />
    );
};

export default PlayerList_List;
