import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

const TeamList_Element = ({ name, city, date, teamCount, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.txt_name}>{name}</Text>
            <Text style={styles.txt_city}>{city}</Text>
            <Text style={styles.txt_teamCount}>{teamCount} Teams</Text>
            <Text style={styles.txt_date}>{date}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: "#ddd",
        width: "100%",
        paddingVertical: 12,
    },
    txt_name: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        paddingBottom: 5,
    },
    txt_city: {
        textAlign: "center",
        fontSize: 18,
    },
    txt_teamCount: {
        textAlign: "center",
        fontSize: 12,
    },
    txt_date: {
        textAlign: "center",
        fontSize: 10,
        color: "#888",
        paddingTop: 10,
    },
});

export default TeamList_Element;
