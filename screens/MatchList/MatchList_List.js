import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MatchList_Element from "./MatchList_Element";

const MatchList_List = ({ data, navigation }) => {
    const onSelectTeam = (id) => {
        navigation.navigate("Match_Screen", { id });
    };

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <MatchList_Element
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

const styles = StyleSheet.create({});

export default MatchList_List;
