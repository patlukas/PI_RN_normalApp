import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import Player_ChangeImage from "./Player_ChangeImage";

const Player_Detail = ({
    data,
    onPressTeam,
    canChangeImage,
    afterChangeImage,
}) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ width: "auto" }}>
                <View style={styles.img_container}>
                    <Image
                        style={styles.img}
                        source={{
                            uri: data.imageURL,
                            // + `?timestamp=${new Date().getTime()}`,
                        }}
                        resizeMode="contain"
                        cash="reload"
                    />
                </View>
                <Player_ChangeImage
                    canChangeImage={canChangeImage}
                    afterChangeImage={afterChangeImage}
                    imageIsDefault={data.imageURL.includes("default.png")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.txt_name}>{data.name}</Text>
                <Text style={styles.txt_username}>{data.username}</Text>
                <Button mode="contained" onPress={onPressTeam}>
                    {data.teamName}
                </Button>
                <Text style={styles.txt_position}>
                    {data.number} | {data.position}
                </Text>
            </View>
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
