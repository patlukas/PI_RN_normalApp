import React from "react";
import { FlatList, StyleSheet } from "react-native";
import TeamList_Element from "./TeamList_Element";

const TeamList_List = ({ data, navigation }) => {
    const onSelectTeam = (id) => {
        navigation.navigate("Team_Screen", { id });
    };

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TeamList_Element
                    name={item.name}
                    city={item.city}
                    onPress={() => onSelectTeam(item.id)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({});

export default TeamList_List;
