import React from "react";
import { FlatList } from "react-native";
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
                    shortName={item.shortName}
                    city={item.city}
                    coachFullName={item.coachFullName}
                    onPress={() => onSelectTeam(item.id)}
                />
            )}
        />
    );
};

export default TeamList_List;
