import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

const Team_DetailBtn = ({ title, onPress, isSelected }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, isSelected && styles.selectedContainer]}
        >
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "25%",
        paddingVertical: 6,
        backgroundColor: "#88a",
    },
    selectedContainer: {
        backgroundColor: "#fcc",
    },
    txt: {
        textAlign: "center",
    },
});

export default Team_DetailBtn;
