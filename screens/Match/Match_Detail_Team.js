import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Match_Detail_Team = ({ name, onPress, specialFont }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={[styles.txt, specialFont && styles.specialFont]}>
                {name}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "45%",
        paddingHorizontal: "2.5%",
        paddingVertical: 15,
        backgroundColor: "#ffe",
        borderRadius: 15,
        marginHorizontal: "2.5%",
    },
    txt: {
        textAlign: "center",
        fontSize: 18,
    },
    specialFont: {
        color: "#0f0",
        fontWeight: "bold",
    },
});

export default Match_Detail_Team;
