import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Match_Detail_Row = ({ valH, valG, title }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.mainTxt}>{valH}</Text>
            <Text style={styles.sepTxt}>{title}</Text>
            <Text style={styles.mainTxt}>{valG}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        width: "100%",
        marginTop: 3,
    },
    mainTxt: {
        flex: 1,
        textAlign: "center",
        fontSize: 19,
    },
    sepTxt: {
        width: 71,
        textAlign: "center",
        color: "#444",
        fontSize: 19,
    },
});

export default Match_Detail_Row;
