import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TeamList_Element from "../TeamList/TeamList_Element";

const Player_Detail = ({ data, onPressTeam }) => {
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
                <Text style={styles.txt_username}>{data.username}</Text>
                <Text style={styles.txt_position}>
                    {data.number} | {data.position}
                </Text>
                <TeamList_Element
                    name={""}
                    shortName={data.shortTeamName}
                    imageURL={data.teamImageURL}
                    onPress={onPressTeam}
                />
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
    txt_position: {
        fontSize: 18,
    },
});

export default Player_Detail;
