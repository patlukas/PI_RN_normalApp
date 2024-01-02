import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const User_Detail = ({ data }) => {
    return (
        <View style={styles.head_container}>
            <Image
                style={styles.image}
                source={{
                    uri:
                        data.imageURL +
                        `?timestamp=${parseInt(new Date().getTime() / 60000)}`,
                }}
            />
            <View>
                <Text style={styles.txt_name}>{data.name}</Text>
                <Text style={styles.txt_username}>{data.userName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 60,
        width: 60,
        margin: 5,
        marginRight: 10,
        borderRadius: 30,
    },
    head_container: {
        flexDirection: "row",
    },
    txt_name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    txt_username: {
        fontSize: 16,
        color: "#444",
    },
});

export default User_Detail;
