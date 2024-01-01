import React from "react";
import { FlatList } from "react-native";
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
                    teamCount={item.teamCount}
                    onPress={() => onSelectTournament(item.id)}
                />
            )}
        />
    );
};

export default TournamentList_List;
