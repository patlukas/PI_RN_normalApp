import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PlayerList_Element = ({ name, position }) => {
    return (
        <View style={styles.player_container}>
            <Text style={styles.player_name}>{name}</Text>
            <Text style={styles.player_position}>{position}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    player_container: {
        width: "100%",
        paddingVertical: "5%",
        paddingHorizontal: 10,
        borderBottomWidth: 2,
    },
    player_name: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    player_position: {
        textAlign: "center",
        fontSize: 16,
    },
});

export default PlayerList_Element;
