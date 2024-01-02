import React from "react";
import { FlatList, View } from "react-native";
import Match_Head from "../Match/Match_Head";

const MatchList_List = ({ data, navigation, addEvenSeparator = false }) => {
    const onSelect = (id) => {
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
                    <Match_Head
                        nameH={item.nameH}
                        nameG={item.nameG}
                        resultH={item.resultH}
                        resultG={item.resultG}
                        imageH={item.imageH}
                        imageG={item.imageG}
                        date={item.date}
                        isLive={item.isLive}
                        onPress={() => onSelect(item.id)}
                    />
                </View>
            )}
        />
    );
};

export default MatchList_List;
