import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Card from "../../components/Card";

const TeamList_Element = ({ name, city, date, onPress }) => {
    return (
        <Card backgroundColor={"#cff"} onPress={onPress}>
            <Text style={styles.txt_name}>{name}</Text>
            <Text style={styles.txt_city}>{city}</Text>
            <Text style={styles.txt_date}>{date}</Text>
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
    txt_date: {
        textAlign: "center",
        fontSize: 16,
    },
});

export default TeamList_Element;
