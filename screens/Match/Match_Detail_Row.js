import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Match_Detail_Row = ({ valH, valG, title, winner = -1 }) => {
    return (
        <View style={styles.view}>
            <Text style={[styles.mainTxt, winner == 0 && styles.winnerTxt]}>
                {valH}
            </Text>
            <Text style={styles.sepTxt}>{title}</Text>
            <Text style={[styles.mainTxt, winner == 1 && styles.winnerTxt]}>
                {valG}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        width: "95%",
        marginHorizontal: "2.5%",
        paddingHorizontal: "2.5%",
        paddingVertical: 8,
        backgroundColor: "#ffe",
        borderRadius: 15,
        marginTop: 5,
    },
    mainTxt: {
        width: "40%",
        textAlign: "center",
        fontSize: 16,
    },
    sepTxt: {
        width: "20%",
        textAlign: "center",
        color: "#444",
    },
    winnerTxt: {
        color: "#0f0",
    },
});

export default Match_Detail_Row;
