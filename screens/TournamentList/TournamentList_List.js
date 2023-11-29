import React from "react";
import { FlatList, StyleSheet } from "react-native";
import TournamentList_Element from "./TournamentList_Element";

const TournamentList_List = ({ data, navigation }) => {
    const onSelectTournament = (id) => {
        navigation.navigate("Tournament_Screen", { id });
    };

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TournamentList_Element
                    name={item.name}
                    city={item.city}
                    date={item.date}
                    onPress={() => onSelectTournament(item.id)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({});

export default TournamentList_List;