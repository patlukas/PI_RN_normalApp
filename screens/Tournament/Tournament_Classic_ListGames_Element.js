import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Card from "../../components/Card";

const Tournament_Classic_ListGames_Element = ({
    nameH,
    nameG,
    winner,
    date,
    onPress,
    index,
}) => {
    return (
        <View style={{ marginBottom: (index % 2) * 40 }}>
            <Card backgroundColor="#fcc" onPress={onPress}>
                <Text style={styles.txt_date}>{date}</Text>
                <View style={styles.view_oneLine}>
                    <Text
                        style={[
                            styles.txt_name,
                            winner === 0 && styles.txt_winner,
                        ]}
                    >
                        {nameH}
                    </Text>
                    <Text style={styles.txt_sep}></Text>
                    <Text
                        style={[
                            styles.txt_name,
                            winner === 1 && styles.txt_winner,
                        ]}
                    >
                        {nameG}
                    </Text>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    view_oneLine: {
        flexDirection: "row",
    },
    txt_name: {
        fontSize: 16,
        fontWeight: 700,
        textAlign: "center",
        width: "48%",
    },
    txt_result: {
        textAlign: "center",
        width: "48%",
    },
    txt_winner: {
        color: "#080",
        fontWeight: 700,
    },
    txt_sep: {
        width: "4%",
        textAlign: "center",
    },
    txt_date: {
        fontSize: 16,
        textAlign: "center",
    },
});

export default Tournament_Classic_ListGames_Element;
