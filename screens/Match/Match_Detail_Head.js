import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Match_Detail_Head = ({ date }) => {
    if (date === null) return null;
    return (
        <View style={styles.view}>
            <Text style={styles.txt_date}>{date}</Text>
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
    txt_date: {
        textAlign: "center",
        fontSize: 16,
        width: "100%",
    },
});

export default Match_Detail_Head;
