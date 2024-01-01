import React from "react";
import { FlatList } from "react-native";
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
                    imageH={item.imageH}
                    imageG={item.imageG}
                    date={item.date}
                    isLive={item.isLive}
                    onPress={() => onSelectTeam(item.id)}
                />
            )}
        />
    );
};

export default MatchList_List;
