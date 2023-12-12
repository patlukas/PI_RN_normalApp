import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Card from "../../components/Card";

const TeamList_Element = ({
    name,
    city,
    shortName,
    coachFullName,
    onPress,
}) => {
    return (
        <Card backgroundColor={"#ccf"} onPress={onPress}>
            <Text style={styles.txt_name}>
                {name} [{shortName}]
            </Text>
            <Text style={styles.txt_city}>{city}</Text>
            <Text style={styles.txt_coach}>{coachFullName}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    txt_name: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 700,
    },
    txt_city: {
        textAlign: "center",
        fontSize: 16,
    },
    txt_coach: {
        textAlign: "center",
        fontSize: 14,
        color: "#642",
    },
});

export default TeamList_Element;
