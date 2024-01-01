import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const MatchList_Element = ({
    nameH,
    nameG,
    resultH,
    resultG,
    imageG,
    imageH,
    isLive,
    date,
    onPress,
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Team name={nameH} imageURL={imageH} />
            <View style={{ width: "auto" }}>
                <Text style={styles.txt_date}>{date}</Text>
                <Text style={styles.txt_result}>
                    {resultH} - {resultG}
                </Text>
                <Text style={styles.txt_live}>{isLive ? "●Live" : ""}</Text>
            </View>
            <Team name={nameG} imageURL={imageG} />
        </TouchableOpacity>
    );
};

const Team = ({ name, imageURL }) => {
    return (
        <View style={styles.team_view}>
            <Image
                style={styles.team_image}
                source={{
                    uri:
                        imageURL +
                        `?timestamp=${parseInt(new Date().getTime() / 60000)}`,
                }}
            />
            <Text style={styles.team_name}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#ddd",
        paddingVertical: 4,
    },
    team_view: {
        flex: 1,
        alignItems: "center",
    },

    team_image: {
        height: 40,
        width: 40,
        margin: 5,
        marginBottom: 0,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    team_name: {
        textAlign: "center",
    },
    txt_result: {
        fontSize: 35,
        color: "#9462E5",
        fontWeight: "700",
    },
    txt_live: {
        top: -10,
        color: "#f33",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
    },
    txt_date: {
        color: "#888",
        bottom: -10,
        fontSize: 11,
        textAlign: "center",
    },
});

export default MatchList_Element;
