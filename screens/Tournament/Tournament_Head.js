import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

const Tournament_Head = ({ name, city, date, teamCount, onPress = null }) => {
    const Tournament_Head_Details = () => {
        return (
            <>
                <Text style={styles.txt_name}>{name}</Text>
                <Text style={styles.txt_city}>{city}</Text>
                <Text style={styles.txt_teamCount}>{teamCount} Teams</Text>
                <Text style={styles.txt_date}>{date}</Text>
            </>
        );
    };
    if (onPress === null) {
        return (
            <View style={styles.container}>
                <Tournament_Head_Details />
            </View>
        );
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, styles.withBorder]}
        >
            <Tournament_Head_Details />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
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
    withBorder: {
        borderColor: "#ddd",
        borderBottomWidth: 1,
    },
});

export default Tournament_Head;
