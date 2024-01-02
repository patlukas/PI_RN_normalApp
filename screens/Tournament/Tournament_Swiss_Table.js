import React from "react";
import {
    FlatList,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
} from "react-native";

const Tournament_Swiss_Table = ({ data, navigation }) => {
    const onSelectTeam = (id) => {
        navigation.navigate("Team_Screen", { id });
    };
    return (
        <View>
            <RowHead />
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <Row
                        place={index + 1}
                        name={item.shortName}
                        paused={item.hasPause}
                        points={item.points}
                        onPress={() => onSelectTeam(item.id)}
                    />
                )}
            />
        </View>
    );
};

const Row = ({ place, name, paused, points, onPress }) => {
    return (
        <View style={styles.row_container}>
            <View style={styles.row_view_0}>
                <Text style={styles.row_txt}>{place}</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.row_view_1}>
                <Text style={styles.row_txt}>{name}</Text>
            </TouchableOpacity>
            <View style={styles.row_view_2}>
                <Text style={styles.row_txt}>{paused ? "Yes" : "No"}</Text>
            </View>
            <View style={styles.row_view_2}>
                <Text style={styles.row_txt}>{points}</Text>
            </View>
        </View>
    );
};

const RowHead = () => {
    return (
        <View style={styles.row_container_head}>
            <View style={styles.row_view_0} />
            <View style={styles.row_view_1}>
                <Text style={styles.row_txt_bold}>Team</Text>
            </View>
            <View style={styles.row_view_2}>
                <Text style={styles.row_txt_bold}>Paused</Text>
            </View>
            <View style={styles.row_view_2}>
                <Text style={styles.row_txt_bold}>Points</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row_container: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 6,
    },
    row_container_head: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 6,
        paddingTop: 15,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    row_txt: {
        textAlign: "center",
        fontSize: 18,
    },
    row_txt_bold: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    row_view_0: {
        width: 15,
    },
    row_view_1: {
        flex: 1,
    },
    row_view_2: {
        width: 80,
    },
});

export default Tournament_Swiss_Table;
