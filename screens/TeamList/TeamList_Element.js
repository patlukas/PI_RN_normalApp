import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import Card from "../../components/Card";

const TeamList_Element = ({ name, city, onPress }) => {
    return (
        <Card backgroundColor={"#ccf"} onPress={onPress}>
            <Text style={styles.txt_name}>{name}</Text>
            <Text style={styles.txt_city}>{city}</Text>
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
});

export default TeamList_Element;
