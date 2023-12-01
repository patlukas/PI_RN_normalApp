import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

const Player_Detail = ({ data, onPressTeam }) => {
    return (
        <View>
            <Text style={styles.txt_name}>{data.name}</Text>
            <Button mode="contained" onPress={onPressTeam}>
                {data.teamName}
            </Button>
            <Text style={styles.txt_position}>
                {data.number} | {data.position}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    txt_name: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    txt_position: {
        textAlign: "center",
        fontSize: 18,
    },
});

export default Player_Detail;
