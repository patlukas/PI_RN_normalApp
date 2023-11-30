import React from "react";
import { FlatList, StyleSheet } from "react-native";
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
                    onPress={() => onSelectPlayer(item.id)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({});

export default PlayerList_List;
