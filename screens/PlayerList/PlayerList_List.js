import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PlayerList_Element from "./PlayerList_Element";

const PlayerList_List = ({ data }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <PlayerList_Element name={item.name} position={item.position} />
            )}
        />
    );
};

const styles = StyleSheet.create({});

export default PlayerList_List;
