import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const TeamList_Element = ({ name, shortName, imageURL, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                style={styles.image}
                source={{
                    uri:
                        imageURL +
                        `?timestamp=${parseInt(new Date().getTime() / 60000)}`,
                }}
            />
            <View style={styles.view_name}>
                <Text style={styles.txt_name}>
                    {name} [{shortName}]
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        marginRight: 8,
    },
    image: {
        height: 40,
        width: 40,
        margin: 5,
        borderRadius: 30,
    },
    txt_name: {
        fontSize: 15,
    },
    view_name: {
        justifyContent: "center",
        flex: 1,
    },
});

export default TeamList_Element;
