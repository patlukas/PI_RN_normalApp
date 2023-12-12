import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "react-native-paper";

const Player_Detail = ({ data, onPressTeam }) => {
    return (
        <View>
            <View style={styles.img_container}>
                <Image
                    style={styles.img}
                    source={{ uri: data.imageURL }}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.txt_name}>{data.name}</Text>
            <Text style={styles.txt_username}>{data.username}</Text>
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
    txt_username: {
        textAlign: "center",
        fontSize: 16,
        color: "#444",
    },
    txt_position: {
        textAlign: "center",
        fontSize: 18,
    },
    img: {
        width: 140,
        height: 140,
    },
    img_container: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Player_Detail;
