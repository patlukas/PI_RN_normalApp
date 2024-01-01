import React from "react";
import { FlatList } from "react-native";
import Tournament_Head from "../Tournament/Tournament_Head";

const TournamentList_List = ({ data, navigation }) => {
    const onSelectTournament = (id) => {
        navigation.navigate("Tournament_Screen", { id });
    };

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <Tournament_Head
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
