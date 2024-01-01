import React from "react";
import { FlatList, View } from "react-native";
import MatchList_Element from "./MatchList_Element";

const MatchList_List = ({ data, navigation, addEvenSeparator = false }) => {
    const onSelectTeam = (id) => {
        navigation.navigate("Match_Screen", { id });
    };
    console.log(addEvenSeparator);
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => (
                <View
                    style={{
                        marginBottom: addEvenSeparator && index % 2 ? 40 : 0,
                    }}
                >
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
                </View>
            )}
        />
    );
};

export default MatchList_List;
