import React from "react";
import { StyleSheet, Text } from "react-native";
import Card from "../../components/Card";

const PlayerList_Element = ({ name, position, number, onPress }) => {
    return (
        <Card backgroundColor="#fcf" onPress={onPress}>
            <Text style={styles.player_name}>{name}</Text>
            <Text style={styles.player_position}>
                {number} | {position}
            </Text>
        </Card>
    );
};

const styles = StyleSheet.create({
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
