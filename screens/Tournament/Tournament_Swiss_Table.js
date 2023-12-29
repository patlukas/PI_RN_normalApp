import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";

const Tournament_Swiss_Table = ({ data, navigation }) => {
    const onSelectTeam = (id) => {
        navigation.navigate("Team_Screen", { id });
    };

    const item = ({ item }) => (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
                onPress={() => onSelectTeam(item.id)}
                style={{ width: 250, backgroundColor: "lightyellow" }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {item.shortName}
                </Text>
            </TouchableOpacity>
            <View style={{ width: 50, backgroundColor: "lightpink" }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {item.hasPause ? "Yes" : "No"}
                </Text>
            </View>
            <View style={{ width: 50, backgroundColor: "lavender" }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {item.points}
                </Text>
            </View>
        </View>
    );
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10%",
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <View style={{ width: 250, backgroundColor: "lightyellow" }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Team Name
                    </Text>
                </View>
                <View style={{ width: 50, backgroundColor: "lightpink" }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Has Pause
                    </Text>
                </View>
                <View style={{ width: 50, backgroundColor: "lavender" }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Points
                    </Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={item}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Tournament_Swiss_Table;
