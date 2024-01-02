import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ children, backgroundColor, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, { backgroundColor }]}
        >
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginHorizontal: "5%",
        paddingHorizontal: "5%",
        marginVertical: 10,
        paddingVertical: 10,
        borderRadius: 15,
    },
});

export default Card;
